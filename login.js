function main(){
    var name = document.getElementById("name");
var number = document.getElementById("number");
var email = document.getElementById("email");
var password = document.getElementById("password");
var username = document.getElementById("username");
    if(name.value==""|| number.value==""|| email.value==""||password.value==""||username.value==""){
        alert("Every credentials are mandatory");
    }else{
        alert("Welcome to Space interior designs");
    }
}