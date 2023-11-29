window.onload = function(){

    tabmenu("tabmenu1","on")
    tabmenu("tabmenu2","active")
    tabmenu({
       selector:".tabmenu2",
        activename:"on"
    })
    

    let dt = document.querySelectorAll(".tabmenu1>dt")
    let dt2 = document.querySelectorAll(".tabmenu2>dt")
    

    for(let i=0; i<dt.length; i++){
        dt[i].addEventListener("click",function(){
            //dt태그들을 클릭할 때 동작할 소스코드
            //dt들 전부 on클래스를 지움
            for(let j=0; j<dt.length; j++){
                dt[j].classList.remove("on")
            }
            //클릭한 dt태그한테만 on클래스를 추가
            this.classList.add("on")
            //this는 클릭하는 맥락 안에서 이벤트가 전달된 태그를 this로 표현할 수 있다.
        })
           
         }
       
     
        for(let i=0; i<dt2.length; i++){
            dt2[i].addEventListener("click",function(){
                
                for(let j=0; j<dt2.length; j++){
                    dt2[j].classList.remove("active")
                }
                this.classList.add("active")
                
            })
               
             }
            
            }







    // dt[0].addEventListener("click",function(){
    //    dt[0].classList.remove("on")
    //    dt[1].classList.remove("on")
    //    dt[2].classList.remove("on")
    //    dt[0].classList.add("on")
      
    //    for(let i=0; i<3; i++){
    //     dt[i].classList.remove("on")
    //    }
    //    dt[0].classList.add("on")
    // })

    // dt[1].addEventListener("click",function(){
    //     dt[0].classList.remove("on")
    //     dt[1].classList.remove("on")
    //     dt[2].classList.remove("on")
    //     dt[1].classList.add("on")
 
    //  })

    //  dt[2].addEventListener("click",function(){
    //     dt[0].classList.remove("on")
    //     dt[1].classList.remove("on")
    //     dt[2].classList.remove("on")
    //     dt[2].classList.add("on")
 
    //  })
