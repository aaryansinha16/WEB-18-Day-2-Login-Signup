document.querySelector("#form").addEventListener("submit",signFun )

var loginDetails = JSON.parse(localStorage.getItem("loginList"))

// var signupArr = JSON.parse(localStorage.getItem("signupList")) || []

function signFun(){
    event.preventDefault()

    var signupObj = {
        email : form.signupEmail.value,
        number : form.signupNo.value,
        password : form.signupPass.value
    }

    console.log(signupObj)

    if(signupObj.email == loginDetails.email){
        alert("Email already used! (Login or use new Email)")
    }
    else if(signupObj.email != loginDetails.email){
        localStorage.setItem("signupList", JSON.stringify(signupObj))
    }

}

