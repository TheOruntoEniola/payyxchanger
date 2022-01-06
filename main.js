window.onload=function() {
    // Button and Menu
    var menu = document.getElementById("menu");
    var contact = document.getElementById("contact");
    var exchange = document.getElementById("exchange")
    var bod = document.getElementById("bod")

    menu.addEventListener("click", glamour);

    function glamour (){
        menu.style.background = "url(./images/close.svg)";
        menu.style.height = "21px";
        bod.style.height= "100vh";
        bod.style.opacity= "0.2";
        contact.style.top = "100px";
        exchange.style.top = "179px";
        menu.removeEventListener("click", glamour)
        menu.addEventListener("click", normal);
    }

    function normal () {
        menu.style.background = "url(./images/menu.svg)";
        menu.style.height = "14px";
        bod.style.height= "2930px";
        contact.style.top = "-100px";
        exchange.style.top = "-100px";
        bod.style.opacity= "1";
        menu.removeEventListener("click", normal)
        menu.addEventListener("click", glamour);
    }


    //Scroller code
    var to = document.getElementById("to");
    var fro = document.getElementById("fro");
    var screen1 = document.getElementById("screen1");
    var screen2 = document.getElementById("screen2");
    var screen3 = document.getElementById("screen3");
    var screen4 = document.getElementById("screen4");
    var phone1 = document.getElementById("phone1");
    var phone2 = document.getElementById("phone2");
    var phone3 = document.getElementById("phone3");
    var phone4 = document.getElementById("phone4");


    to.addEventListener("click", slideto);
    fro.addEventListener("click", slidefrom);

    function slideto () {
        screen1.style.left= "";
    }

    function slidefrom () {

    }
}
