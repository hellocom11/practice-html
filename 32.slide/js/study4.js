$(()=>{

    $(window).resize(function(){
    let devwidth = $(window).width()
    if(devwidth>1024){
        views = 3
        $(".train").css("width",(100*slides/views)+"%")
    }else if(devwidth>768){
        views = 2
        $(".train").css("width",(100*slides/views)+"%")
    }else{
        views = 1
        $(".train").css("width",(100*slides/views)+"%")
    }
    })
    
    let devicewidth = $(window).width()
    let slides = $(".train>li").length
    let  views = devicewidth>1024?3:devicewidth>768?2:1
    $(".train").css("width",(100*slides/views)+"%")


    let count = 0;
$(".btn_next").click(function(){
    count++
    if(count>slides-1-(views-1)){count=slides-1-(views-1)}
    $(".train").css("transform",`translateX(${-(100/slides)*count}%)`)
})

$(".btn_prev").click(function(){
    count--
    if(count<0){count=0}
    $(".train").css("transform",`translateX(${-20*count}%)`)
})


})