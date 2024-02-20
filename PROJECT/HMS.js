const list = document.querySelectorAll('.list');
const home = document.querySelector('.home');
const CustLogin = document.querySelector('.CustLogin');
// function showValues() {
//     var uIwD;
//     uIwD = document.getElementById(Cust.Name);
//     alert ("You Name: " + uIwD);
// }
function showValues() {
    var name = document.getElementById("Cust").Name.value;
    alert ("You Name: " + name[2]);
    // if (name == "Chirag") {
    // } else {
    //     alert ("Wrong Player");
    // }
}
function activelink(){
    list.forEach((item) =>{
    item.classList.remove('active');
    CustLogin.style.display = 'none';
});
this.classList.add('active');
}
function cust(){
    CustLogin.style.display = 'flex';
}
list.forEach((item) =>{
item.addEventListener('click' , activelink);
});
home.addEventListener('click', cust);