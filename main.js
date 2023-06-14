function sign(){
var name = document.getElementById("name");
var number = document.getElementById("number");
var email = document.getElementById("email");
var pswd = document.getElementById("pswd");
    if(name.value =="" || number.value=="" || email.value==""||pswd.value==""){
            alert("Every field is mandatory");
    }else{
        alert("successfully submitted");
    }
}
function login(){
    var email_Address = document.getElementById("email_Address");
    var password = document.getElementById("Password");
    if(email_Address.value==""|| password.value==""){
        alert("Every credential is mandatory");
    }else{
        alert("Successfully logged in");
    }
}
function show_hidden(){
    var password = document.getElementById("Password");
    var icon = document.getElementById("icon");
    if(password.type =="password"){
        password.type = "text";
        icon.classList = "bi bi-eye-slash";
    }else{
        password.type = "password";
        icon.classList = "bi bi-eye";
    }
}
function show_hidden2(){
    var pswd = document.getElementById("pswd");
    var icon2 = document.getElementById("icon2");
    if(pswd.type =="password"){
        pswd.type = "text";
        icon2.classList = "bi bi-eye-slash";
    }else{
        pswd.type = "password";
        icon2.classList = "bi bi-eye";
    }
}
