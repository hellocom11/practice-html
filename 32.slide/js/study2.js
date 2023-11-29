function moveSlideFade(array,cnt){
    for(let i = 0; i<array.length ; i++){
        array[i].classList.remove("on")
    }
    array[cnt].classList.add("on")
}


window.onload = function(){
    let btn_next = document.querySelector(".btn_next")
    let train =  document.querySelector(".train")
    let trainLiArray = train.children
    let count = 0
    let pagination = document.querySelector(".pagination")
    let pageArray = document.querySelectorAll(".pagination>li")
    let pageLI = pagination.children





    btn_next.addEventListener("click",function(){
       count++ 
        if(count>3){count=3}
        moveSlideFade(trainLiArray,count)
        moveSlideFade(pageArray,count)
       
        // trainLiArray[0].classList.remove("on")
        // trainLiArray[1].classList.remove("on")
        // trainLiArray[2].classList.remove("on")
        // trainLiArray[3].classList.remove("on")
        // trainLiArray[count].classList.add("on")

        // for(let i  = 0; i<trainLiArray.length; i++){
        //     trainLiArray[i].classList.remove("on")
        // }   trainLiArray[count].classList.add("on")
         
       for(let i = 0; i<4; i++){
           pageLI[i].classList.remove("on")
       }
        pageLI[count].classList.add("on")
    })
   
    function moveSlideFade(array,count){
        for(let i  = 0; i<array.length; i++){
            array[i].classList.remove("on")
        }   array[count].classList.add("on")
    }


   
   
   let btn_prev = document.querySelector(".btn_prev")

    btn_prev.addEventListener("click",function(){
       count--
        if(count<0){count=0}
        
        for(let i  = 0; i<trainLiArray.length; i++){
            trainLiArray[i].classList.remove("on")
        }   trainLiArray[count].classList.add("on")
   
       pageLI[0].classList.remove("on")
       pageLI[1].classList.remove("on")
       pageLI[2].classList.remove("on")
       pageLI[3].classList.remove("on")
       pageLI[count].classList.add("on")
    })
}