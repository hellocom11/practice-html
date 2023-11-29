$(function(){
    let pathLength = $("#curvedLine").get(0).getTotalLength()
   $(window).scroll(function(){
    let sct = $(window).scrollTop()
    $("#txtpath").attr("startOffset",sct)
   })
    







})