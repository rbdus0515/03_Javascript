function() {
    document.addEventListener("keydown",function() {

        let key = e.keyCode;

        let.main = document.getElementById("main");

        let X = parseInt(main.style.top || 0, 10);
        
        let y = parseInt(main.style.top || 0, 10);


        if( key == 37 ) {
            main.style.left = x - 50 + "px";
        }
        if( key == 38 ) {
            main.style.left = y - 50 + "px";
        }
        if( key == 39 ) {
            main.style.left = x + 50 + "px";
        }
        if( key == 40 ) {
            main.style.left = y + 50 + "px";
        }
        

    });
}