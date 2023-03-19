$(function () {
    $(".spin").fadeOut(1000, function () {
        $(".layer").fadeOut(1000);
        $("body").css("overflow", "auto");
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

// -------------------- Area -----------------
areaList()

let finalRes,finalRes2;
async function areaList() {
    let apiResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
    let res = await apiResponse.json();
    finalRes = res.meals

    displayData()
}

async function FilterByArea(name) {
    let apiResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${name}`)
    let res = await apiResponse.json();
    finalRes2 = res.meals;
    displayByCountry()
}

function showDetails(name) {
    FilterByArea(name)
}




function displayData() {
    cartona = '';
for (let i = 0; i < finalRes.length; i++) {
    cartona += ` <div class="col-md-3">
    <div onclick='showDetails("${finalRes[i].strArea}")' class="item">

    <i class="fa-solid text-white fa-house-laptop fa-4x"></i>
    <h3 class="text-white mt-4">${finalRes[i].strArea}</h3>
    </div>
    </div>`
    
}
    document.getElementById("myRow").innerHTML = cartona;
}

 async function displayByCountry() {
    cartona = '';
    for (let i = 0; i < await finalRes2.length; i++) {
        cartona += ` <div  class="col-md-3">
        
        <div onclick="getId('${finalRes2[i].idMeal}')"  class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
        <img  class="w-100" src='${finalRes2[i].strMealThumb}'/> 
        <div id="meal" class="meal-layer text-black p-2">
        <h3 id="par" class"mt-5" class="mt-4 text-center">${finalRes2[i].strMeal}</h3>
       
                        </div>
        </div>
        </div>
        </div>`

    }
    document.getElementById("myRow").innerHTML = cartona;
}

// -------------------- End Area -----------------


// --------------------  meal Details -----------------

let Resaulte;
async function mealDetails(id) {
    let apiResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    let details = await apiResponse.json();
    Resaulte = details.meals;
    displayDetails()
}
function getId(id) {
mealDetails(id)
}
function displayDetails() {
    let cartona = '';
    for (let i = 0; i < Resaulte.length; i++) {
        cartona += ` <div  class="col-md-4">
        <img  class="w-100" src='${Resaulte[i].strMealThumb}'/> 
        <h3 class="text-white">${Resaulte[i].strMeal}</h3>
        </div>
<div  class="col-md-8">
<h2 class="text-white">Instructions</h2>
<p class="text-white">${Resaulte[i].strInstructions}</p>
<h3 class="text-white"><span class="text-white fw-bold">Area :</span>${Resaulte[i].strArea}</h3>
<h3 class="text-white"><span class="text-white fw-bold">Category : </span>${Resaulte[i].strCategory}</h3>
<span class="text-white fw-bold fs-3">Recipes :</span>
<div class="row gy-5 pt-4">
<div  class="col-md-3">
<p id="Recipes" class=" text-center fs-5 rounded">${Resaulte[i].strMeasure1} ${Resaulte[i].strIngredient1}</p>
<p id="Recipes" class=" text-center fs-5 rounded">${Resaulte[i].strMeasure2} ${Resaulte[i].strIngredient2}</p>
<p id="Recipes" class=" text-center fs-5 rounded">${Resaulte[i].strMeasure3} ${Resaulte[i].strIngredient3}</p>

</div>
<div  class="col-md-3">
<p id="Recipes" class=" text-center fs-5 rounded">${Resaulte[i].strMeasure4} ${Resaulte[i].strIngredient4}</p>
<p id="Recipes" class=" text-center fs-5 rounded">${Resaulte[i].strMeasure5} ${Resaulte[i].strIngredient5}</p>
<p id="Recipes" class=" text-center fs-5 rounded">${Resaulte[i].strMeasure6} ${Resaulte[i].strIngredient6}</p>

</div>
<div  class="col-md-3">
<p id="Recipes" class=" text-center fs-5 rounded">${Resaulte[i].strMeasure7} ${Resaulte[i].strIngredient7}</p>
<p id="Recipes" class=" text-center fs-5 rounded">${Resaulte[i].strMeasure8} ${Resaulte[i].strIngredient8}</p>
<p id="Recipes" class=" text-center fs-5 rounded">${Resaulte[i].strMeasure9} ${Resaulte[i].strIngredient9}</p>

</div>
<div  class="col-md-3">
<p id="Recipes" class=" text-center fs-5 rounded">${Resaulte[i].strMeasure10} ${Resaulte[i].strIngredient10}</p>
<p id="Recipes" class=" text-center fs-5 rounded">${Resaulte[i].strMeasure11} ${Resaulte[i].strIngredient11}</p>
<p id="Recipes" class=" text-center fs-5 rounded">${Resaulte[i].strMeasure12} ${Resaulte[i].strIngredient12}</p>
</div>
<span class="text-white fw-bold fs-3">Tags :</span>
<div  class="col-md-4">
<span class="text-white bg-info w-25 fs-6 d-block mb-4">${Resaulte[i].strTags}</span>
<a class="btn btn-success pe-2" href="${Resaulte[i].strSource}">source</a>
<a class="btn btn-danger" href="${Resaulte[i].strYoutube}">youtube</a>
</div>
</div>
        </div>`
    }
    document.getElementById("myRow").innerHTML = cartona;
}
// -------------------- End meal Details -----------------