/// <reference types="../@types/jquery" />


$(document).ready(function () {



    $('.loading').fadeOut(3000, function () {

        $('body').css('overflow', 'auto')

    })


// ===============================================nav bar============================================
$('.open , .close').on('click', function () {

    let navwidth = $('.slidebox').outerWidth();
    // console.log(navwidth)

    let leftvalue = $('.slidebox , .nav2').css('left');
    // console.log(leftvalue)
   
    if (leftvalue == '0px') {
        $('.slidebox , .nav2').animate({ left: `-${navwidth}` }, 1000);
        $('.close').css('display', 'none')
        $('.open').css('display', 'block')

    }
    else {
        $('.slidebox , .nav2').animate({ left: `0px` }, 1000);
        $('.close').css('display', 'block')
        $('.open').css('display', 'none')

    }
})


// ===============================================search============================================
 $('.Search').on('click', function () {

    $('#parent').removeClass('d-none');
    $('#parent').addClass('d-block');

    // $('#parent').html(`<div class="row mt-4">
    // <div class="col-md-6">
    //     <input onkeyup="searchhhh(this.value);" class="nbut form-control w-100 p-1  bg-black text-white" type="text" placeholder=" Search By Name"
    //         aria-label="default input example">
    // </div>
    // <div class="col-md-6">
    //     <input class="form-control w-100 p-1 bg-black" type="text" placeholder=" Search By Frist Letter"
    //         aria-label="default input example">
    // </div>
// </div>`)

 })
// onkeyup="searchhhh(this.value);"
// ===============================================contact us============================================
$('.ContactUs').on('click', function () {

    $('.child').removeClass('d-none');
    $('.child').addClass('d-block');

})
// ===============================================Categories============================================


    let DateArray = [];
    let cont = document.querySelector('.cont');
    
    $('.Categories').on('click', async function CategoriesMeals() {
    
        let responce = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    
        let date = await responce.json();
    
        DateArray = date.categories
    
        console.log(DateArray);
        displayCategories();
    })
    
    // {/* <h3 class="">${DateArray[i].idCategory}</h3>
    // <h3 class="">${DateArray[i].strCategory}</h3>
    // <img src="${DateArray[i].strCategoryThumb}">
    // <p>${DateArray[i].strCategoryDescription}</p> */}
    
    function displayCategories() {
        let divs = "";
        for (let i = 0; i < DateArray.length; i++) {
            divs += `
            <div class="col-md-3">
                <div class="qqq position-relative">
                       <img src="${DateArray[i].strCategoryThumb}" class="bbbb mt-5 w-100 rounded-2">
                    <div class="on-photo">
                       <h3>${DateArray[i].strCategory}</h3>
                       <p>${DateArray[i].strCategoryDescription.slice(0, 150)}</p>
                    </div>
                </div>
            </div>`
        }
        cont.innerHTML = divs;
    }
    

    
    $('.cont').on('mouseenter', function () {
        $('.on-photo').slideDown(200);
        // $('.on-photo').animate({ top: 0 }, 200)
        // $('.on-photo').slideUp(200);
    })
    


// ===============================================Aree============================================

$('.Area').on('click', async function mealsArea() {

    let responce = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');

    let datee = await responce.json();

    DateArray = datee.meals

    console.log(DateArray);
    displayArea();
})



function displayArea() {
    let divs = "";
    for (let i = 0; i < DateArray.length; i++) {

        divs += ` <div class="col-md-3 text-center mt-5  mb-4">
        <i class="fa-solid fa-house-laptop fa-4x text-white "></i>
        <h3 class="fs-3 text-white ">${DateArray[i].strArea}</h3>
    </div>`
    }
    cont.innerHTML = divs;
}

// ===============================================Ingredients============================================

$('.Ingredients').on('click', async function mealsIngredients() {

    let responce = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');

    let datee = await responce.json();

    DateArray = datee.meals

    console.log(DateArray);
    displayIngredients();
})


function displayIngredients() {
    let divs = "";
    for (let i = 0; i < 20; i++) {

        divs += ` <div class="col-md-3 text-center mt-5  mb-4">
       <i class="fa-solid fa-drumstick-bite fa-4x text-white"></i>
               <h3 class="fs-3 text-white ">${DateArray[i].strIngredient}</h3>
        <p class="text-white">${DateArray[i].strDescription.slice(0, 120)}</p>
    </div>`
    }
    cont.innerHTML = divs;
}

// =========================================Filter by Category==================================

async function Filter(x) {

    let responce = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=' + x);

    let datee = await responce.json();

    DateArray = datee.meals;

    console.log(DateArray);
    displayFilter()
}

//  <h2 class=" text-white">${DateArray[i].idMeal}</h2> 

function displayFilter() {
    let divs = "";
    for (let i = 0; i < DateArray.length; i++) {
        divs += `
        <div class="col-md-3">
                <div class="nnn position-relative">
                <img src="${DateArray[i].strMealThumb}" class="bbbb mt-5 w-100 rounded-2">
             <div class="on-photooo">
             <h3 class="text-white">${DateArray[i].strMeal}</h3>
            
             </div>
         </div>
        </div>`
    }
    cont.innerHTML = divs;
}


$('.cont').on('click', function (e) {

    let xclick = e.target;

    let clicksrc = $(xclick).text();
    console.log(clicksrc)

    Filter(clicksrc);
})



$('.cont').on('mouseenter', function () {
    $('.on-photo').slideDown(200);
    // $('.on-photo').animate({ top: 0 }, 200)
    // $('.on-photo').slideUp(200);
})


// ********************************

async function Filtercat(y) {

    let responce = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + y);

    let dateet = await responce.json();

    DateArray = dateet.meals;

    console.log(dateet);
    displayFil()
}



function displayFil() {
    let divs = "";
    for (let i = 0; i < DateArray.length; i++) {
        divs += `
        <div class="col-md-4 mt-4">
                <img class="w-100 rounded-3 " src="${DateArray[i].strMealThumb}" alt="">
                <h2 class="text-white">${DateArray[i].strMeal}</h2>
        </div>
        <div class="mt-4 col-md-8">
        <h2 class="text-white d-flex start-0">Instructions</h2>
        <p class="text-white">${DateArray[i].strInstructions}</p>
        <h3 class="text-white d-flex start-0" ><span> Area : </span> ${DateArray[i].strArea}</h3>
        <h3 class="fw-bolder text-white  d-flex start-0" ><span > Category : </span> ${DateArray[i].strCategory}</h3>
        <h2 class="fw-bolder text-white  d-flex start-0">Recipes :</h2>
            <p class="bg-info p-2 rounded-3 d-inline-block">${DateArray[i].strIngredient1}</p>
            <p class="bg-info p-2 rounded-3 d-inline-block">${DateArray[i].strIngredient2}</p>
            <p class="bg-info p-2 rounded-3 d-inline-block">${DateArray[i].strIngredient3}</p>
            <p class="bg-info p-2 rounded-3 d-inline-block">${DateArray[i].strIngredient4}</p>
            <p class="bg-info p-2 rounded-3 d-inline-block">${DateArray[i].strIngredient5}</p>
            <p class="bg-info p-2 rounded-3 d-inline-block">${DateArray[i].strIngredient6}</p>
            <p class="bg-info p-2 rounded-3 d-inline-block">${DateArray[i].strIngredient7}</p>
            <p class="bg-info p-2 rounded-3 d-inline-block">${DateArray[i].strIngredient8}</p>
            <p class="bg-info p-2 rounded-3 d-inline-block">${DateArray[i].strIngredient9}</p>
            <p class="bg-info p-2 rounded-3 d-inline-block">${DateArray[i].strIngredient10}</p>
            <p class="bg-info p-2 rounded-3 d-inline-block">${DateArray[i].strIngredient11}</p>
            <p class="bg-info p-2 rounded-3 d-inline-block">${DateArray[i].strIngredient12}</p>
            <p class="bg-info p-2 rounded-3 d-inline-block">${DateArray[i].strIngredient13}</p>
            <p class="bg-info p-2 rounded-3 d-inline-block">${DateArray[i].strIngredient14}</p>
            <p class="bg-info p-2 rounded-3 d-inline-block">${DateArray[i].strIngredient15}</p>
            <p class="bg-info p-2 rounded-3 d-inline-block">${DateArray[i].strIngredient16}</p>
            <p class="bg-info p-2 rounded-3 d-inline-block">${DateArray[i].strIngredient17}</p>
            <p class="bg-info p-2 rounded-3 d-inline-block">${DateArray[i].strIngredient18}</p>
            <p class="bg-info p-2 rounded-3 d-inline-block">${DateArray[i].strIngredient19}</p>
            <p class="bg-info p-2 rounded-3 d-inline-block">${DateArray[i].strIngredient20}</p>
            <h2 class="fw-bolder text-white  d-flex start-0">Tags :</h2>
            <p class="bg-info p-2 rounded-3 d-inline-block ">${DateArray[i].strTags}</p>
            <div class="d-grid gap-2 d-md-block ">
                <button class="btn btn-success " ><a href="${DateArray[i].strSource}" target="_blank" class="text-light  p-1 text-decoration-none">Source</a></button>
                <button class="btn btn-danger " ><a href="${DateArray[i].strYoutube}" target="_blank" class="text-light p-1 text-decoration-none">Youtube</a></button>
        </div
       `
    }
    cont.innerHTML = divs;
}


$('.cont').on('click', function (e) {

    let xclick = e.target;

    let clicksrc = $(xclick).text();
    console.log(clicksrc)

    Filtercat(clicksrc);
})

// =========================================Filter by Area==================================

async function FilterArea(x) {

    let responce = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=' + x);

    let datee = await responce.json();

    DateArray = datee.meals;

    console.log(DateArray);
    displayAreaaa()
}

//  <h2 class=" text-white">${DateArray[i].idMeal}</h2> 

function displayAreaaa() {
    let divs = "";
    for (let i = 0; i < DateArray.length; i++) {
        divs += `
        <div class="col-md-3">
                <div class="nnn position-relative">
                <img src="${DateArray[i].strMealThumb}" class="bbbb mt-5 w-100 rounded-2">
             <div class="on-photooo">
             <h3 class="text-white">${DateArray[i].strMeal}</h3>
            
             </div>
         </div>
        </div>`
    }
    cont.innerHTML = divs;
}


$('.cont').on('click', function (e) {

    let xclick = e.target;

    let clicksrc = $(xclick).text();
    console.log(clicksrc)

    FilterArea(clicksrc);
})



$('.cont').on('mouseenter', function () {
    $('.on-photo').slideDown(200);
    // $('.on-photo').animate({ top: 0 }, 200)
    // $('.on-photo').slideUp(200);
})


// =========================================Filter by Ingredients==================================



async function FilterIngredients(x) {

    let responce = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=' + x);

    let datee = await responce.json();

    DateArray = datee.meals;

    console.log(DateArray);
    displayIngred()
}


function displayIngred() {
    let divs = "";
    for (let i = 0; i < DateArray.length; i++) {
        divs += `
        <div class="col-md-3">
                <div class="nnn position-relative">
                <img src="${DateArray[i].strMealThumb}" class="bbbb mt-5 w-100 rounded-2">
             <div class="on-photooo">
             <h3 class="text-white">${DateArray[i].strMeal}</h3>
            
             </div>
         </div>
        </div>`
    }
    cont.innerHTML = divs;
}


$('.cont').on('click', function (e) {

    let xclick = e.target;

    let clicksrc = $(xclick).text();
    console.log(clicksrc)

    FilterIngredients(clicksrc);
})


$('.cont').on('mouseenter', function () {
    $('.on-photooo').slideDown(100);
    // $('.on-photo').animate({ top: 0 }, 200)
    // $('.on-photo').slideUp(200);
})


// ===========================================SearchByName================================================

let parent = document.querySelector('#parent')


async function searchhhh(x) {

    let responce = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${x}`);

    let datee = await responce.json();

    DateArray = datee.meals;

    console.log(datee);
    displaysearc()

}

function displaysearc() {
    let divs = "";
    for (let i = 0; i < DateArray.length; i++) {
        divs += `
        <div class="col-md-3">
                <div class="nnn position-relative">
                <img src="${DateArray[i].strMealThumb}" class="bbbb mt-5 w-100 rounded-2">
             <div class="on-photooo">
             <h3 class="text-white">${DateArray[i].strMeal}</h3>
            
             </div>
         </div>
        </div>`
    }
    cont.innerHTML = divs;
}

$('#parent').on('mouseenter', function () {
    $('.on-photooo').slideDown(100);
    // $('.on-photo').animate({ top: 0 }, 200)
    // $('.on-photo').slideUp(200);
})

$('.SearchByName').on('keyup',function(){

    let Named = $('.SearchByName').val();
    console.log(Named);
    searchhhh(Named)

  })
// ===========================================================================================


async function searchhletter(x) {

    let responce = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${x}`);

    let datee = await responce.json();

    DateArray = datee.meals;

    console.log(datee);
    displaysearchh()

}

function displaysearchh() {
    let divs = "";
    for (let i = 0; i < DateArray.length; i++) {
        divs += `
        <div class="col-md-3">
                <div class="nnn position-relative">
                <img src="${DateArray[i].strMealThumb}" class="bbbb mt-5 w-100 rounded-2">
             <div class="on-photooo">
             <h3 class="text-white">${DateArray[i].strMeal}</h3>
            
             </div>
         </div>
        </div>`
    }
    cont.innerHTML = divs;
}

$('#parent').on('mouseenter', function () {
    $('.on-photooo').slideDown(100);
    // $('.on-photo').animate({ top: 0 }, 200)
    // $('.on-photo').slideUp(200);
})

$('.SearchByfristletter').on('keyup',function(){

    let Named = $('.SearchByfristletter').val();
    console.log(Named);
    searchhletter(Named)

  })

// ===========================================================================================

$('#nbo').slideDown(1000)



})




// $('.Nameinput')


// function validNameInput() {

//     let regexName = /^[A-Z][a-z ]{3,15}[0-9]{0,3}$/;

//     if (regexName.test(Nameinput.value)) {
//         demo1.classList.add('d-none');
//         return true;
//     } else {
//         demo1.innerHTML = `<strong class="text-danger">Start with Cap Letter!!</strong>`;
//         demo1.classList.remove('d-none');
//         return false;
//     }

// }

// function validEmailInput() {

//     let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

//     if (regexEmail.test(Emailinput.value)) {
//         return true;
//     } else {
//         demo2.innerHTML = `<strong class="text-danger">Enter valid Phone Number!!</strong>`;
//         demo2.classList.remove('d-none');
//         return false;
//     }
// }

// function validPasswordInput() {

//     let regexPassword = /^[A-Z][a-z ]{3,15}[0-9]{0,3}$/;

//     if (regexPassword.test(Passwordinput.value)) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function validAgeInput() {

//     let regexAge = /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/;

//     if (regexAge.test(Ageinput.value)) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function validphoneInput() {

//     let regexphone = /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/;

//     if (regexphone.test(Phoneinput.value)) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function validRepasswordinput() {

//     let  regexPassword = /^[A-Z][a-z ]{3,15}[0-9]{0,3}$/;

//     if (regexPassword.test(Passwordinput.value)) {
//         return true;
//     } else {
//         return false;
//     }
// }












