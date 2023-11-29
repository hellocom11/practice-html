window.onload = function(){
    let box = document.querySelector(".box")
    let btn1 =  document.querySelector(".btn1")
    btn1.addEventListener("click",function(){
        //btn1을 클릭했을 때 실행될 소스코드
       box.style.color="blue"
    })

    let btn2 =  document.querySelector(".btn2")
    btn2.addEventListener("click",function(){
        //btn2을 클릭했을 때 실행될 소스코드
        box.style.color="red"
    })

    let btn3 = document.querySelector(".btn3")
    btn3.addEventListener("click",function(){
        box.classList.add("on")
        boxState = true
    })

    let btn4 = document.querySelector(".btn4")
    btn4.addEventListener("click",function(){
        box.classList.remove("on")
        boxState = false
    })

    let boxState =false //박스가 닫혀있다는 뜻

    let btn5 = document.querySelector(".btn5")
    btn5.addEventListener("click",function(){
        if(boxState==true){
            box.classList.remove("on")
            boxState = false
        }else{box.classList.add("on") 
        boxState = true}
    })
}



