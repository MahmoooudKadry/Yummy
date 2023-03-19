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
            $("#slideBar ul li").slideUp(500)
            $("#closeSlide").removeClass("fa-solid text-dark open-close-icon fa-2x fa-x")
            $("#closeSlide").addClass("fa-solid text-dark open-close-icon fa-2x fa-align-justify")
        })
    } else {
        $("#slideBar").animate({ left: '0px' }, 500, function () {
            $("#slideBar ul li").show(500)
            $("#closeSlide").removeClass("fa-solid text-dark open-close-icon fa-2x fa-align-justify")
            $("#closeSlide").addClass("fa-solid text-dark open-close-icon fa-2x fa-x")
        })
    }
})

// -------------------- End Slider -----------------

// -------------------- Contact US -----------------
document.addEventListener("keyup" , submitBtn)

let nameInput = document.getElementById("nameInput"),
    nameAlert = document.getElementById("nameAlert"),
    emailInput = document.getElementById("emailInput"),
    emailAlert = document.getElementById("emailAlert"),
    phoneInput = document.getElementById("phoneInput"),
    phoneAlert = document.getElementById("phoneAlert"),
    ageInput = document.getElementById("ageInput"),
    ageAlert = document.getElementById("ageAlert"),
    passwordInput = document.getElementById("passwordInput"),
    passwordAlert = document.getElementById("passwordAlert"),
    repasswordInput = document.getElementById("repasswordInput"),
    repasswordAlert = document.getElementById("repasswordAlert");

function nameValidation() {
    let nameRegex = /^[a-z\sA-Z]+$/
    if (nameRegex.test(nameInput.value) == true) {
        nameAlert.classList.replace("d-block", "d-none")
        return true
    } else {
        nameAlert.classList.replace("d-none", "d-block")
        return false
    }
}
function emailValidation() {
    let emailRegex = /^[a-zA-Z0-9]+[@][a-z]+[.][a-z]+$/
    if (emailRegex.test(emailInput.value) == true) {
        emailAlert.classList.replace("d-block", "d-none")
        return true
    } else {
        emailAlert.classList.replace("d-none", "d-block")
        return false
    }
}
function phoneValidation() {
    let phoneRegex = /^[0-9]{11}$/
    if (phoneRegex.test(phoneInput.value) == true) {
        phoneAlert.classList.replace("d-block", "d-none")
        return true
    } else {
        phoneAlert.classList.replace("d-none", "d-block")
        return false
    }
}
function ageValidation() {
    let ageRegex = /^([1-7][0-9]{1}|80)$/
    if (ageRegex.test(ageInput.value) == true) {
        ageAlert.classList.replace("d-block", "d-none")
        return true
    } else {
        ageAlert.classList.replace("d-none", "d-block")
        return false
    }
}
function passValidation() {
    let passRegex = /^[\w]{8,20}$/
    if (passRegex.test(passwordInput.value) == true) {
        passwordAlert.classList.replace("d-block", "d-none")
        return true
    } else {
        passwordAlert.classList.replace("d-none", "d-block")
        return false
    }
}
function reepassValidation() {
    if (repasswordInput.value == passwordInput.value) {
        repasswordAlert.classList.replace("d-block", "d-none")
        return true
    } else {
        repasswordAlert.classList.replace("d-none", "d-block")
        return false
    }
}

function submitBtn() {
    if (nameValidation() == true && emailValidation() == true && phoneValidation() == true && ageValidation() == true &&
        passValidation() == true && reepassValidation() == true) {
        document.getElementById("submitBtn").removeAttribute("disabled"); 
    } else {
        document.getElementById("submitBtn").setAttribute("disabled" , "true"); 

    }
}

