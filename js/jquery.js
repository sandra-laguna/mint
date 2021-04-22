$(document).ready(function(){
    $(".gallery_img").mouseenter(function(){
        $(this).css("opacity", "0.5");
    });
    $(".gallery_img").mouseleave(function(){
        $(this).css("opacity", "1");
    });

    $(".blog_recientes").mouseenter(function(){
        $(this).find("a").css({display: "block"});
    });
    $(".blog_recientes").mouseleave(function(){
        $(this).find("a").css({display: "none"});
    });

    document.getElementById("hamburger").onclick = function toggleMenu() {
        const navToggle = document.getElementsByClassName("toggle");
        for (let i = 0; i < navToggle.length; i++) {
          navToggle.item(i).classList.toggle("hidden");
        }
    };

  });