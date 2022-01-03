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
        menu.addEventListener("click", normal);
    }

    function normal () {
        menu.style.background = "url(./images/menu.svg)";
        menu.style.height = "14px";
        bod.style.height= "2930px";
        contact.style.top = "-100px";
        exchange.style.top = "-100px";
        bod.style.opacity= "1";
        menu.addEventListener("click", glamour);
    }
}