const API_LOOKUP = "https://www.themealdb.com/api/json/v1/1/lookup.php?i="

const urlParams = new URLSearchParams(window.location.search);
const mealsId = urlParams.get('id')

const getData = async (id, api) => {
    // handle parameter null
    if(id == null || id == "") {
        window.location.href = "/";
    }

    // mengambil data dari API
    const response = await fetch(api + id, {
        method: "get"
    })
    
    let mealsData = await response.json(); 
    
    // handle id salah
    if(mealsData.meals == null) {
        window.location.href = "/";
    }

    // insert html dom
    let mealsInfo = 
        `<figure>
            <img src="${mealsData.meals[0].strMealThumb}" alt="Gambar" width="100"/>
        </figure>
        <h2>${mealsData.meals[0].strMeal}</h2>
        <p>${mealsData.meals[0].strMeal} is a delicious food.</p>`;
    let mealsRecipe = 
        `<h3>Bahan-Bahan</h3>
        <table>
            <tr>
                <th>Ingridient</th>
                <th>Measure</th>
            </tr>
            <tr>
                <td>${mealsData.meals[0].strIngredient1}</td>
                <td>${mealsData.meals[0].strMeasure1}</td>
            </tr>
            <tr>
                <td>${mealsData.meals[0].strIngredient2}</td>
                <td>${mealsData.meals[0].strMeasure2}</td>
            </tr>
            <tr>
                <td>${mealsData.meals[0].strIngredient3}</td>
                <td>${mealsData.meals[0].strMeasure3}</td>
            </tr>
            <tr>
                <td>${mealsData.meals[0].strIngredient4}</td>
                <td>${mealsData.meals[0].strMeasure4}</td>
            </tr>
            <tr>
                <td>${mealsData.meals[0].strIngredient5}</td>
                <td>${mealsData.meals[0].strMeasure5}</td>
            </tr>
            <tr>
                <td>${mealsData.meals[0].strIngredient6}</td>
                <td>${mealsData.meals[0].strMeasure6}</td>
            </tr>
            <tr>
                <td>${mealsData.meals[0].strIngredient7}</td>
                <td>${mealsData.meals[0].strMeasure7}</td>
            </tr>
            <tr>
                <td>${mealsData.meals[0].strIngredient8}</td>
                <td>${mealsData.meals[0].strMeasure8}</td>
            </tr>
            <tr>
                <td>${mealsData.meals[0].strIngredient9}</td>
                <td>${mealsData.meals[0].strMeasure9}</td>
            </tr>
            <tr>
                <td>${mealsData.meals[0].strIngredient10}</td>
                <td>${mealsData.meals[0].strMeasure10}</td>
            </tr>
            </tr>
            <tr>
                <td>${mealsData.meals[0].strIngredient11}</td>
                <td>${mealsData.meals[0].strMeasure11}</td>
            </tr>
            <tr>
                <td>${mealsData.meals[0].strIngredient12}</td>
                <td>${mealsData.meals[0].strMeasure12}</td>
            </tr>
            <tr>
                <td>${mealsData.meals[0].strIngredient13}</td>
                <td>${mealsData.meals[0].strMeasure13}</td>
            </tr>
            <tr>
                <td>${mealsData.meals[0].strIngredient14}</td>
                <td>${mealsData.meals[0].strMeasure14}</td>
            </tr>
            <tr>
                <td>${mealsData.meals[0].strIngredient15}</td>
                <td>${mealsData.meals[0].strMeasure15}</td>
            </tr>
            <tr>
                <td>${mealsData.meals[0].strIngredient16}</td>
                <td>${mealsData.meals[0].strMeasure16}</td>
            </tr>
            <tr>
                <td>${mealsData.meals[0].strIngredient17}</td>
                <td>${mealsData.meals[0].strMeasure17}</td>
            </tr>
            <tr>
                <td>${mealsData.meals[0].strIngredient18}</td>
                <td>${mealsData.meals[0].strMeasure18}</td>
            </tr>
            <tr>
                <td>${mealsData.meals[0].strIngredient19}</td>
                <td>${mealsData.meals[0].strMeasure19}</td>
            </tr>
            <tr>
                <td>${mealsData.meals[0].strIngredient20}</td>
                <td>${mealsData.meals[0].strMeasure20}</td>
            </tr>
        </table>
        <h3>Instruction</h3>
        <p>${mealsData.meals[0].strInstructions}</p>
        <br/>
        <hr/>
        <br/>
        <p>Source: <a href="${mealsData.meals[0].strSource}">KLIK HERE</a></p>`;

    let info = document.getElementById("mealsInfo");
    let recipe = document.getElementById("mealsRecipe");

    info.innerHTML = mealsInfo
    recipe.innerHTML = mealsRecipe
}

getData(mealsId, API_LOOKUP)