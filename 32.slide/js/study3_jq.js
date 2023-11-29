$(function(){
    let count = 0
    
    $(".btn_next").click(function(){
        count++
        if(count>6){count=6
        $(".btn_next").addClass("ghost")
        }else{
            $(".btn_next").removeClass("ghost")
            $(".btn_next").removeClass("ghost")
        } //예외처리
        $(".train").css("transform","translateX("+(-(100/7)*count)+"%)")
        $(".train>li").removeClass("on")
        $(".train>li").eq(count).addClass("on")
        $(".pagination>li").removeClass("on")
        $(".pagination>li").eq(count).addClass("on")

    })
   
    $(".btn_prev").click(function(){
        count--
        if(count<0){count=0}
        $(".train").css("transform","translateX("+(-14.285*count)+"%)")
        $(".train>li").removeClass("on")
        $(".train>li").eq(count).addClass("on")
        $(".pagination>li").removeClass("on")
        $(".pagination>li").eq(count).addClass("on")

    })

    //페이지버튼 클릭 시 등장
    $(".pagination>li").click(function(){
      let idx = $(this).index()
      //idx -> 0일때 ->(이전버튼 고스트),6일때->(다음버튼고스트)
        if(idx==0){
            $(".btn_prev").addClass("ghost")
            $(".btn_next").removeClass("ghost")
        }else if(idx==6){
            $(".btn_next").addClass("ghost")
            $(".btn_prev").removeClass("ghost")
        }else{
            $(".btn_prev").removeClassClass("ghost")
            $(".btn_next").removeClassClass("ghost")
        }

      $(".train").css("transform","translateX("+(-idx*(100/7))+"%)")

      $(".pagination>li").removeClass("on")
      $(".pagination>li").eq(idx).addClass("on")

      $(".train>li").removeClass("on")
      $(".train>li").eq(idx).addClass("on")
    })

// 자동기능

setInterval(function(){

 count++
        if(count>6){count=0
        $(".btn_next").addClass("ghost")
        }else{
            $(".btn_next").removeClass("ghost")
            $(".btn_next").removeClass("ghost")
        } //예외처리
        $(".train").css("transform","translateX("+(-(100/7)*count)+"%)")
        $(".train>li").removeClass("on")
        $(".train>li").eq(count).addClass("on")
        $(".pagination>li").removeClass("on")
        $(".pagination>li").eq(count).addClass("on")

},2000)

})