window.onload = function(){
    //브라우저가 끝까지 html을 해석하고 난 뒤 한 번 실행되는 공간
    let btnP = document.querySelector(".btn_prev")
    let btnN = document.querySelector(".btn_next")
    let train = document.querySelector(".train")
    let trainListArray = train.children
    let pagination = document.querySelector(".pagination")
    let pageLI = pagination.children
    let count = 0
    
 
    

    btnN.addEventListener("click",function(){
        //넥스트버튼을 클릭했을 때 실행되는 소스코드
        //1. 기차가 이동하는 소스코드
        count++
        train.style.transform = `translateX(-${(100/7)*count}%)`

        
        if(count >= 6){
            count=6
            btnN.classList.add("ghost")
        }else{
            btnN.classList.remove("ghost")
            btnP.classList.remove("ghost")
        }

        for(let i = 0; i<6; i++){
            pageLI[i].classList.remove("on")
        }
        pageLI[count].classList.add("on")

      //3. 리스트안에 floatingbox영역이 보이는 기능
      for(let i = 0; i<7; i++){
        trainListArray[i].classList.remove("on")
      }
      trainListArray[count].classList.add("on")
    })

    btnP.addEventListener("click",function(){
        count--
        if(count<=0){
            count=0
            btnP.classList.add("ghost")
        }else{
            btnP.classList.remove("ghost")
            btnN.classList.remove("ghost")
        }

        train.style.transform = "translateX("+(-(100/7)*count)+"%)"

       for(let i = 0; i<6; i++){
        pageLI[i].classList.remove("on")
       }
       pageLI[count].classList.add("on")
       
       for(let i = 0; i<7; i++){
        trainListArray[i].classList.remove("on")
      }
      trainListArray[count].classList.add("on")


    })

}