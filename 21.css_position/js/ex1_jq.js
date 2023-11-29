$(document).ready(function(){

    $(".tabmenu1>dt").click(function(){
        $(".tabmenu1>dt").removeClass("on")
        $(this).addClass("on")

        //index()함수 를 사용하여 선택한 태그가 부모태그 기준 몇 번째 자식태그인지를 숫자형태로 리턴할 수 있다
      let idx =  $(this).index()
      

    })

    $(".tabmenu2>dt").click(function(){
        $(".tabmenu2>dt").removeClass("active")
        $(this).addClass("active")
    })

})