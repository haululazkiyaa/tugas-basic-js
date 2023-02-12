const API_BREAKFAST = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast"
const API_DESSERT = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert"

const getData = async (id, api) => {
    // mengambil data dari API
    const response = await fetch(api, {
        method: "get"
    });
    
    let dataList = await response.json(); 
    let mealsList = ``;

    for (let item of dataList.meals) {
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

    let breakfast = document.getElementById("listBreakfast");
    let dessert = document.getElementById("listDessert");

    if (id == 0) {
        breakfast.innerHTML = mealsList;
    } else {
        dessert.innerHTML = mealsList;
    }
}

getData(0, API_BREAKFAST)
getData(1, API_DESSERT)