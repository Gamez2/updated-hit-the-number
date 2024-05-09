

gsap.set(".slides",{
    scale:5
})

var tl= gsap.timeline({
    scrollTrigger:{
        trigger:".home",
       start:"top top",
       end:"bottom top",
       pin:true,
        scrub:2 
    }
})

tl.to(".video",{

    '--clip':"0%",
    ease:Power2,
    
},'a')
.to(".slides",{
    scale:1,
    ease:Power2
},'a')
.to(".lft",{
    xPercent:-10 ,
    stagger:.03,
    ease:Power4
},'b')
.to(".rgt",{
    xPercent:10 ,
    stagger:.03,
    ease:Power4
},'b')

