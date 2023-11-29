$(document).ready(function(){
    $(".banner").css("color","red")

    $(".blue").click(function(){
        $(".banner").css("color","blue")
    })

    $(".green").click(function(){
        $(".banner").css("color","green")
    })

    // $(".banner").mouseover(function(){
    //     alert("마우스올림")
    // })

    $(".open").click(function(){
        $(".banner").addClass("on")
        boxState ="열림"
    })

    $(".close").click(function(){
        $(".banner").removeClass("on")
        boxState = "닫힘"
    })

    let boxState = "닫힘"
    $(".toggle").click(function(){
        // 상태에 따라서 열닫기능
        if(boxState=="닫힘"){
            $(".banner").addClass("on")
            boxState = "열림"
        }else{
            $(".banner").removeClass("on")
            boxState = "닫힘"
        }
    })


    // let S = false
    // $(".toggle").click(function(){
    //     // 상태에 따라서 열닫기능
    //    if(S == true){$(".banner").removeClass("on")
    //     $(S) = false
    // } else{$(".banner").addClass("on")
    // $(S) = true}

    // })
  
})
