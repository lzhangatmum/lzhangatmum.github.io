window.onload = function () {
    var start = document.getElementById("start");
    var context = document.getElementById("text-area");
    var animation = document.getElementById("animation");
    var fontsize  =  document.getElementById("fontsize");
    var oTimer = null;
    var anima ;
    var a = 0;

    fontsize.onchange = function(){
        context.style.fontSize = FRONTSIZE[fontsize.value];
    }

    animation.onchange = function (){
        anima =  ANIMATIONS[animation.value].split("=====");
        context.value = anima.shift();
    }

    start.onclick = function () {
        run();
    }

    function run (){

       context.value =  anima[a % (anima.length)];
       a++;
       setTimeout(run, 100);
    }
}

