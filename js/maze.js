$(document).ready(function() {
        $("#start").click(function () {
            fun();
        });
    }
)

function fun(){
    $(".boundary").mouseover(function () {
        $(".boundary").css("background-color","red");

    });
}