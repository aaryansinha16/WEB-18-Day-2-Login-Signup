var signupDetails = JSON.parse(localStorage.getItem("signupList"))

document.querySelector("form").addEventListener("submit", loginFun)

function loginFun(){
    event.preventDefault()

    loginObj = {
        email : form.loginEmail.value,
        password: form.loginPass.value
    }
    
    // console.log(signupDetails.email, signupDetails.password)
    if(signupDetails === null){
        alert("Create an Account");
    }
    else if(signupDetails.email == loginObj.email && signupDetails.password == loginObj.password){
        alert("Login Successful!")
        localStorage.setItem("loginList", JSON.stringify(loginObj))
    }
    else{
        alert("User Does Not Exists")
    }

}
