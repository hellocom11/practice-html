$(document).ready(function(){

    let count = 0
    let winscrTop = 0
    $(window).scroll(function(){
        count++
        console.log(count+"번 실행되었습니다.")
    

    winscrTop =  $(window).scrollTop()
    console.log("현재 스크롤바가 위에서"+winscrTop+"만큼 떨어져있습니다")
   
    if(winscrTop>400){
        $("h1").addClass("on")
    }else{ $("h1").removeClass("on")}

})
  
})