$(document).ready(function(){
    //팝업 닫는 기능
    let popups =$(".popup").length
    $(".btnClosePop").click(function(){
       // $(".popup").addClass("hidden") //웹디시험용
       // $(".cover").addClass("hidden") //웹디시험용
        popups--
        if(!popups){
            $(".cover").addClass("hidden")
        }

       $(this).parents(".popup").addClass("hidden")
     })




})