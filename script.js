function loading() {
    window.addEventListener('load', () => {
        setTimeout(() => {
            // Fade out the loading screen
            document.getElementById('loadingScreen').style.opacity = '0';
            
            // After the transition, hide the loading screen and show the content
            setTimeout(() => {
                document.getElementById('loadingScreen').style.display = 'none';
                document.getElementById('content').style.display = 'block';
                
                // Fade in the content
                setTimeout(() => {
                    document.getElementById('content').style.opacity = '1';

                    // Start text animation once the loading is over
                    Shery.textAnimate(".stbu", {
                        style: 2,
                        y: 30,
                        duration: 5,
                        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
                        multiplier: 0.1,
                    });

                }, 50); // Slight delay to ensure display change is applied
            }, 500); // Match the transition duration in CSS (1 second)
        }, 500);
    });
}
loading();


function navpopup(){

    var menu = document.querySelector("#nav i")
        var close = document.querySelector("#full i")

        var tl = gsap.timeline()

        tl.to("#full", {
            right: 0,
            duration: 0.5
        })
        tl.from("#full h4", {
            x: 150,
            duration: 0.6,
            stagger: 0.2,
            opacity: 0
        })
        tl.from("#full i", {
            opacity: 0
        })
        tl.pause()

        menu.addEventListener("click", function () {
            tl.play()
        })
        close.addEventListener("click", function () {
            tl.reverse()
        })
}
navpopup();


function content_animation(){

    var tl = gsap.timeline();

    tl.from("#wltxt", {
        duration: 1,
        delay: 3,
        opacity: 0,
        ease: Expo 
    });

    tl.from(".htext .p", {
        x: -20,
        y: 100,
        duration: 1, 
        opacity: 0,
        ease: Expo
    });

    tl.from(".iframe", {
        y: 20,
        duration: 1,
        opacity: 0,
        ease: Expo 
    });

}
content_animation();


function home_animation() {
    gsap.set(".slidesm", { scale: 5 })

    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".home",
            start: "top top",
            end: "bottom top",
            pin: true,
            scrub: 3
        }
    })

    tl.to(".vdodiv", {
        '--clip': "0%",
        ease: "power2",
    }, 'a')

    tl.to(".slidesm", {
        scale: 1,
        ease: "power2",
    }, 'a')

    tl.to(".lft", {
        xPercent: -10,
        stagger: .03,
        ease: "power4",
    }, 'b')

    tl.to(".rgt", {
        xPercent: 10,
        stagger: .03,
        ease: "power4",
    }, 'b')
}
home_animation();


function page3animation(){
gsap.from(".page3 .elem", {
    scrollTrigger: {
        trigger: ".page3",
        start: "top 50%", // Start the animation when the top of .page3 is 80% from the top of the viewport
        end: "top 100%", // End the animation when the bottom of .page3 is 20% from the top of the viewport
        pin: false,
        scrub: 3,
    },
    y: 100,
    duration: 0.9,
    opacity: 0,
    stagger: 0.3,
    scrub: 3,
    ease: Expo
});
}
page3animation();


function cursoranimation(){


document.addEventListener("mousemove",function(dets){
    gsap.to("#cursor",{
        left:dets.x,
        top:dets.y
    })
})

document.querySelectorAll(".child").forEach(function (elem){
    elem.addEventListener("mouseenter",function(){
        gsap.to("#cursor",{
            transform:"translate(-50%,-50%) scale(1)",
        });
    });
    elem.addEventListener("mouseleave",function(){
        gsap.to("#cursor",{
            transform:"translate(-50%,-50%) scale(0)",
        });
    });
})

}
cursoranimation();


function page4animation(){
    gsap.from(".page4 .child", {
        scrollTrigger: {
            trigger: ".page4",
            start: "top 40%", // Start the animation when the top of .page3 is 80% from the top of the viewport
            end: "top 100%", // End the animation when the bottom of .page3 is 20% from the top of the viewport
            pin: false,
            scrub: 3,
        },
        y: 100,
        duration: 1.5,
        opacity: 0,
        stagger: 0.3,
        scrub: 3,
        ease: Expo
    });
}
page4animation();


function footeranimation(){
gsap.from(".footer-logo", {
  scrollTrigger: {
    trigger: ".footer",
    start: "top bottom",
    end: "bottom bottom",
    scrub: 1
  },
  y: 50,
  opacity: 0,
  duration: 1
});

const sections = document.querySelectorAll('.footer-section');

sections.forEach((section, index) => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top bottom",
      end: "bottom bottom",
      scrub: 1
    },
    y: 50,
    opacity: 0,
    duration: 1,
    delay: index * 0.2 // Stagger animations
  });
});
}
footeranimation();