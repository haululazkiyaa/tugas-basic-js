const API_SEARCH = "https://www.themealdb.com/api/json/v1/1/search.php?s="

const urlParams = new URLSearchParams(window.location.search);
const keyword = urlParams.get('s')

const getResult = async (keyword, api) => {
    // mengambil data dari API
    const response = await fetch(api + keyword, {
        method: "get"
    });
    
    let resultList = await response.json(); 
    let mealsList = ``;

    if (resultList.meals != null) {
        for (let item of resultList.meals) {
        mealsList += 
            `<article class="card">
                <figure>
                    <img src="${item.strMealThumb}" alt="Gambar" />
                </figure>
                <h3>${item.strMeal}</h3>
                <p>${item.strMeal} is a delicious food.</p>
                <a class="btn" href="pages.html?id=${item.idMeal}">Lihat Menu <i class="fa-solid fa-arrow-right"></i></a>
            </article></li>`
        }

        let result = document.getElementById("listSearch");
        let resultLength = document.getElementById("resultLength");
        result.innerHTML = mealsList;
        resultLength.innerHTML = `Total data found: ${resultList.meals.length}`;
    } else {
        let resultLength = document.getElementById("resultLength");
        resultLength.innerHTML = `Nothing data found!`;
    }
}

getResult(keyword, API_SEARCH)