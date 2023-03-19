$(function () {
    $(".spin").fadeOut(1000, function () {
        $(".layer").fadeOut(1000);
        $("body").css("overflow", "auto");
    })
})

// -------------------- Slider -----------------


$("#slideBar").css('left', `-240.562px`);
$("#closeSlide").click(function () {

    if ($("#slideBar").css('left') == '0px') {
        let sliderOffset = $("#sliderContent").innerWidth();
        $("#slideBar").animate({ left: -sliderOffset }, 500, function () {
            $("#slideBar ul li").slideUp(300)
            $("#closeSlide").removeClass("fa-solid text-dark open-close-icon fa-2x fa-x")
            $("#closeSlide").addClass("fa-solid text-dark open-close-icon fa-2x fa-align-justify")
        })
    } else {
        $("#slideBar").animate({ left: '0px' }, 500, function () {
            $("#slideBar ul li").show(300)
            $("#closeSlide").removeClass("fa-solid text-dark open-close-icon fa-2x fa-align-justify")
            $("#closeSlide").addClass("fa-solid text-dark open-close-icon fa-2x fa-x")
        })
    }
})

// -------------------- End Slider -----------------

// -------------------- Categories -----------------
let res, element, res2,finalRes2;

getCategoriesData()

async function getCategoriesData() {
    let apiResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
    res = await apiResponse.json();
    element = res.categories
    displayData()
}

function displayData() {
    let cartona = '';
    for (let i = 0; i < element.length; i++) {
        cartona += ` <div  class="col-md-3">
        
        <div onclick='showDetails("${element[i].strCategory}")' class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
        <img  class="w-100" src='${element[i].strCategoryThumb}'/> 
        <div id="meal" class="meal-layer text-black p-2">
        <h3 class="mt-4 text-center">${element[i].strCategory}</h3>
        <p>${element[i].strCategoryDescription}</p>
                        </div>
        </div>
        </div>
        </div>`

    }
    document.getElementById("myRow").innerHTML = cartona;
}


async function getMealsData(term) {
    let apiResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${term}`);
    let filter = await apiResponse.json();
    res2 = filter.meals
    displayMeal()
}
function showDetails(name) {
    getMealsData(name)
}
function displayMeal() {
    cartona = '';
    for (let i = 0; i < res2.length; i++) {
        cartona += ` <div  class="col-md-3">
        
        <div onclick="getId('${res2[i].idMeal}')" class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
        <img class="w-100" src='${res2[i].strMealThumb}'/> 
        <div id="meal" class="meal-layer text-black p-2">
        <h3 id="par" class"mt-5" class="mt-4 text-center">${res2[i].strMeal}</h3>
       
                        </div>
        </div>
        </div>
        </div>`

    }
    document.getElementById("myRow").innerHTML = cartona;
}

// -------------------- End Categories -----------------

// --------------------  meal Details -----------------


async function mealDetails(id) {
    let apiResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    let details = await apiResponse.json();
    finalRes2 = details.meals;
    displayDetails()
}
function getId(id) {
mealDetails(id)
}
function displayDetails() {
    let cartona = '';
    for (let i = 0; i < finalRes2.length; i++) {
        cartona += ` <div  class="col-md-4">
        <img  class="w-100" src='${finalRes2[i].strMealThumb}'/> 
        <h3 class="text-white">${finalRes2[i].strMeal}</h3>
        </div>
<div  class="col-md-8">
<h2 class="text-white">Instructions</h2>
<p class="text-white">${finalRes2[i].strInstructions}</p>
<h3 class="text-white"><span class="text-white fw-bold">Area :</span>${finalRes2[i].strArea}</h3>
<h3 class="text-white"><span class="text-white fw-bold">Category : </span>${finalRes2[i].strCategory}</h3>
<span class="text-white fw-bold fs-3">Recipes :</span>
<div class="row gy-5 pt-4">
<div  class="col-md-3">
<p id="Recipes" class=" text-center fs-5 rounded">${finalRes2[i].strMeasure1} ${finalRes2[i].strIngredient1}</p>
<p id="Recipes" class=" text-center fs-5 rounded">${finalRes2[i].strMeasure2} ${finalRes2[i].strIngredient2}</p>
<p id="Recipes" class=" text-center fs-5 rounded">${finalRes2[i].strMeasure3} ${finalRes2[i].strIngredient3}</p>

</div>
<div  class="col-md-3">
<p id="Recipes" class=" text-center fs-5 rounded">${finalRes2[i].strMeasure4} ${finalRes2[i].strIngredient4}</p>
<p id="Recipes" class=" text-center fs-5 rounded">${finalRes2[i].strMeasure5} ${finalRes2[i].strIngredient5}</p>
<p id="Recipes" class=" text-center fs-5 rounded">${finalRes2[i].strMeasure6} ${finalRes2[i].strIngredient6}</p>

</div>
<div  class="col-md-3">
<p id="Recipes" class=" text-center fs-5 rounded">${finalRes2[i].strMeasure7} ${finalRes2[i].strIngredient7}</p>
<p id="Recipes" class=" text-center fs-5 rounded">${finalRes2[i].strMeasure8} ${finalRes2[i].strIngredient8}</p>
<p id="Recipes" class=" text-center fs-5 rounded">${finalRes2[i].strMeasure9} ${finalRes2[i].strIngredient9}</p>

</div>
<div  class="col-md-3">
<p id="Recipes" class=" text-center fs-5 rounded">${finalRes2[i].strMeasure10} ${finalRes2[i].strIngredient10}</p>
<p id="Recipes" class=" text-center fs-5 rounded">${finalRes2[i].strMeasure11} ${finalRes2[i].strIngredient11}</p>
<p id="Recipes" class=" text-center fs-5 rounded">${finalRes2[i].strMeasure12} ${finalRes2[i].strIngredient12}</p>
</div>
<span class="text-white fw-bold fs-3">Tags :</span>
<div  class="col-md-4">
<span class="text-white bg-info w-25 fs-6 d-block mb-4">${finalRes2[i].strTags}</span>
<a class="btn btn-success pe-2" href="${finalRes2[i].strSource}">source</a>
<a class="btn btn-danger" href="${finalRes2[i].strYoutube}">youtube</a>
</div>
</div>
        </div>`
    }
    document.getElementById("myRow").innerHTML = cartona;
}
// -------------------- End meal Details -----------------