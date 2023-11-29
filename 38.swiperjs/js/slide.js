$(function(){
    let slider1 = new Swiper(".station1",{
        on:{
            slideChange:function(){
                console.log("슬라이드가 움직였습니다")
            }
        }
    })

    let slider2 = new Swiper(".station2",{
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          autoplay:true,
          slidesPerView: 2,
        //   direction:'vertical',
          effect:'cube',
    })
    slider2.on("slideChange",function(){
        console.log(slider2.activeIndex)
        $(".txt").html(contents2[slider2.activeIndex])
    })

    let contents2 = [
        `<h3>title1</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti libero nam dignissimos numquam aut qui consectetur error quaerat. Cupiditate praesentium atque consectetur facilis accusantium molestias doloremque quos, voluptatum cumque quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere dolore aliquid odio distinctio maiores vitae inventore, soluta nam dicta! Obcaecati dolore sed adipisci dignissimos, modi recusandae similique nam eveniet quo!</p>`,
        `<h3>title2</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti libero nam dignissimos numquam aut qui consectetur error quaerat. Cupiditate praesentium atque consectetur facilis accusantium molestias doloremque quos, voluptatum cumque quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere dolore aliquid odio distinctio maiores vitae inventore, soluta nam dicta! Obcaecati dolore sed adipisci dignissimos, modi recusandae similique nam eveniet quo!</p>`,
        `<h3>title3</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti libero nam dignissimos numquam aut qui consectetur error quaerat. Cupiditate praesentium atque consectetur facilis accusantium molestias doloremque quos, voluptatum cumque quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere dolore aliquid odio distinctio maiores vitae inventore, soluta nam dicta! Obcaecati dolore sed adipisci dignissimos, modi recusandae similique nam eveniet quo!</p>`,
        `<h3>title4</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti libero nam dignissimos numquam aut qui consectetur error quaerat. Cupiditate praesentium atque consectetur facilis accusantium molestias doloremque quos, voluptatum cumque quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere dolore aliquid odio distinctio maiores vitae inventore, soluta nam dicta! Obcaecati dolore sed adipisci dignissimos, modi recusandae similique nam eveniet quo!</p>`
        
    ]

    let gallerySlider = new Swiper(".galleryStation",{
        slidesPerView:2,
        speed:1000,
        breakpoints:{
            280:{
                slidesPerView:1
            },
            320:{
                slidesPerView:1.3
            },
            768:{
                slidesPerView:2
            },
            1024:{
                slidesPerView:3
            }
        }
    })
    let noticeImgSlider = Swiper(".noticeImgStation",{
        on:{slideChange:function(){
            noticeImgSlider.activeIndex
        }}
    })
    noticeImgSlider.on("slideChange",function(){})
    let noticeTxtSlider = Swiper(".noticeTxtStation",{
        direction:"vertical",
    })
    //swiper.slideTo(index,speed,runCallbacks)
    //noticeTxtSlider.slideTo(5)
    //noticeImgSlider.slideTo(3)
})

