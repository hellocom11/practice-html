$(document).ready(function(){
    let btnNext = $(".btn_next")
    let btnPrev = $(".btn_prev")
    let train = $(".train")
    let trainLength = $(".train").children().trainLength
    train.css("width",+(trainLength*100)+"%")
    let count = 0
    let pageUL = $(".pagination")
    let pageLI = pageUL.children()

   

    btnNext.click(function(){
        count++
        if(count>5){count=5}
        //기차가 움직이는 코드
        train.css("transform","translateX("+(-16.7*count)+"%)")
        
        for(let i = 0; i<trainLength; i++){
            pageLI[i].addClass("on")
        }
        pageLI[count].removeClass("on")


    })

    btnPrev.click(function(){
        count--
        if(count<0){count=trainLength-1}
        train.css("transform","translateX("+(-16.7*count)+"%)")
        for(let i =0; i<trainLength; i++){
            pageLI[i].removeClass("on")
        }
        pageLI.eq(count).addClass("on")
    })

//  자동기능
let timer1 = setInterval(function(){

count++
        if(count>5){count=5}
        //기차가 움직이는 코드
        train.css("transform","translateX("+(-16.7*count)+"%)")
        
        for(let i = 0; i<trainLength; i++){
            pageLI[i].addClass("on")
        }
        pageLI[count].removeClass("on")

},3000)

$(".station").mouseover(function(){
    clearInterval(timer1)
})

// $(".station").mouseout(function(){
//     timer1 = setInterval(function(){
//         count++
//         if(count>5){count=5}
//         //기차가 움직이는 코드
//         train.css("transform","translateX("+(-16.7*count)+"%)")
        
//         for(let i = 0; i<trainLength; i++){
//             pageLI[i].addClass("on")
//         }
//         pageLI[count].removeClass("on")
//     })
    

})

