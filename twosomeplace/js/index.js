window.onload = function(){
    let btnmenu = document.querySelector(".btnmenu")
    let hiddengnb = document.querySelector(".hiddengnb")
    let boxState = false
    //메뉴버튼을 클릭 시 숨겨진 메뉴영역이 보임
    btnmenu.addEventListener("click",function(){
        
            hiddengnb.classList.add("on")
    })
    //메뉴 닫기 버튼 클릭시 숨겨진 메뉴 영역이 닫힘

    let btnCloseMenu = document.querySelector(".btnCloseGnb")

    btnCloseMenu.addEventListener("click",function(){
        hiddengnb.classList.remove("on")
    })
    //제이쿼리~
    $(".btnCloseGnb").click(function(){
        $(".hiddengnb").removeClass("on")
    })
}