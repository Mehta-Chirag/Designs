var letter;
function search(temp, str) {
    for (let i = 0; i < str.length; i++) {
        if (temp == str[i]) {
            return ("'" + temp + "' is present in the string");
        }
    } return ("'" + temp + "' is not present in the string");
}
function check() {
    var temp = document.getElementById("Cust").Name.value;
    letter = temp;
    // alert("Letter : " + temp);
    var str = "INCEPTION";
    document.getElementById("Output").innerHTML = search(temp, str);
}