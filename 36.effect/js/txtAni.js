function textAnimation(selector,option){
    // let txt =  $(selector).text()
    let tag = document.querySelector(selector)
    let txt = tag.textContent
    let result = ""
    for(let i =0; i<txt.length; i++){
      result+="<i style='animation: "+(option.aniName)+" 1s ease "+(i*option.delay)+"s forwards;opacity:0;display:inline-block'>"+txt[i]+"</i>"
    }
    // $(selector).html(result)
    tag.innerHTML = result
  }