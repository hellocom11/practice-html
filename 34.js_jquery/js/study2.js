
$(document).ready(function(){
    let bb = document.querySelector("#bb")
    let jqbb = $("#bb")
    // bb.css("blue") <- 작동못함
    // bb변수에는 자바스크립트 문서객체가 저장되어있가 때문에 제이쿼리문서객체의 메서드인 css함수를 사용할 수 없음

    // bb.style.color="red"
    // jqbb.css("color","blue")
    // document.querySelector("#bb")

    $("#bb").css("color","red")
    // $(bb).css("color","blue")
    jqbb.get(0).style.color="red"
    // jqbb변수에는 제이쿼리문서객체가 있다. 그런데 get(0)메서드를 실행하여 그 자리에는 자바스크립트 문서객체로 전횐되어 남겨졌다.
    $($(bb).get(0)).get(0).style.textDecoration="underline"

    let naverlink = $(".naverlink")
    $(".naverlink").attr("href","http://naver.com")
    naverlink.attr("target","_blank")
    let txt = naverlink.attr("title")
    // alert(txt) 
    // 여러번 쓸 경우 변수를 만들어 놓고 하는게 빠름

    let naverlink2 = document.querySelector(".naverlink")
    naverlink2.setAttribute("href","http://daum.net")
   let txt2 = naverlink2.getAttribute("title")
//    alert($(naverlink2).attr("href"))  

let txt3 = $(".abox").text()

$(".textFrame").html("<h3>오늘은 금요일"+txt3+"</h3>")

$(".Prev").prev().css("color","red")
$(".Prev").next().css("color","blue")
$(".Prev").parent().css("border","1px solid red")
$(".mom").children().css("font-style","italic")
$(".mom").children().eq(1).css("background","green")
$(".mom>li").eq(0).css("font-size","1.4rem")
$(".mom>li:nth-of-type(2)").css("text-decoration","underline")


let lists = document.querySelector(".mom").children
lists[0].style.backgroundColor = "lightcyan"
lists[2].style.backgroundColor = "yellow"


$(".des").addClass("on")
$(".des").removeClass("on")
})