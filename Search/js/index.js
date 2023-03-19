$(function() {
    $(".spin").fadeOut(1000,function() {
        $(".layer").fadeOut(1000);
        $("body").css("overflow" , "auto");
    })
})

// -------------------- Slider -----------------

$("#slideBar").css('left' , `-240.562px`);
$("#closeSlide").click(function() {
    
    if($("#slideBar").css('left') == '0px') {
        let sliderOffset = $("#sliderContent").innerWidth(); 
        $("#slideBar").animate({left:-sliderOffset} , 500 , function() {
            $("#slideBar ul li").slideUp(500)
            $("#closeSlide").removeClass("fa-solid text-dark open-close-icon fa-2x fa-x")
            $("#closeSlide").addClass("fa-solid text-dark open-close-icon fa-2x fa-align-justify")
        })
    } else {
        $("#slideBar").animate({left:'0px'} , 500 , function() {
            $("#slideBar ul li").show(500)
            $("#closeSlide").removeClass("fa-solid text-dark open-close-icon fa-2x fa-align-justify")
            $("#closeSlide").addClass("fa-solid text-dark open-close-icon fa-2x fa-x")
        })
    }
})

// -------------------- End Slider -----------------

// -------------------- Search By Name -----------------


let res1,
SearchByNameInput = document.getElementById("SearchByName");
async function SearchByName(name) {
    let apiResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
    res1 = await apiResponse.json();
    displayData()
}

SearchByNameInput.addEventListener("keyup" , function() {
    let search = SearchByNameInput.value;
    SearchByName(search)
})

function displayData() {
    cartona = '';
for (let i = 0; i < res1.meals.length; i++) {
    cartona += ` <div class="col-md-3">
    
    <div onclick="getId('${res1.meals[i].idMeal}')" class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
    <img class="w-100" src='${res1.meals[i].strMealThumb}'/> 
    <div class="meal-layer d-flex align-items-center text-black p-2">
    <h3 class="mt-4">${res1.meals[i].strMeal}</h3>
                    </div>

    </div>
    
    </div>
    </div>`
    
}
    document.getElementById("myRow").innerHTML = cartona;
}

// -------------------- End Search By Name -----------------

// -------------------- Search By First Letter -----------------
let res2,
finalRes2,
SearchByFirstLetterInput = document.getElementById("SearchByFirstLetter");
async function SearchByFirstLetter(letter) {
    let apiResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
    res2 = await apiResponse.json();
    displayData2()
}

SearchByFirstLetterInput.addEventListener("keyup" , function() {
    let search2 = SearchByFirstLetterInput.value;
    SearchByFirstLetter(search2)
})

function displayData2() {
    cartona = '';
for (let i = 0; i < res2.meals.length; i++) {
    cartona += ` <div class="col-md-3">
    
    <div onclick="getId('${res2.meals[i].idMeal}')" class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
    <img class="w-100" src='${res2.meals[i].strMealThumb}'/> 
    <div class="meal-layer d-flex align-items-center text-black p-2">
    <h3>${res2.meals[i].strMeal}</h3>
                    </div>

    </div>
    
    </div>
    </div>`
    
}
    document.getElementById("myRow").innerHTML = cartona;
}

// -------------------- End Search By First Letter -----------------


// -------------------- meal Details -----------------

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