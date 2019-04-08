
var textarea = document.createElement("textarea");
window.onload = function(){
    textarea.style.marginTop = "20px";
    textarea.rows = 4;
    textarea.columns = 30;
    textarea.style.width = "100px";
    textarea.style.height = "150px";


    var mydiv  = document.createElement("div");
    mydiv.appendChild(textarea);
    mydiv.style.border = "solid 1px gray";
    mydiv.style.margin = "50px";


    var button  =  document.createElement("button");
    button.textContent = "Bigger";
    button.style.padding ="30px";
    button.onclick = myOnclick;


    var mydivtwo  = document.createElement("div");
    mydivtwo.appendChild(button);
    mydivtwo.style.border = "solid 1px gray";
    mydivtwo.style.marginTop = "50px";

    var body  =document.getElementById("body");
    body.appendChild(mydiv);
    body.appendChild(mydivtwo);
}

var myOnclick = function (){
    textarea.style.height = (parseInt(textarea.style.height)+10)+"px";
    textarea.style.width = (parseInt(textarea.style.width)+10)+"px";
}