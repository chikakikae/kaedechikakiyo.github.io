
$(function(){
   $(".header-sp-icon-wrap").click(function(){ /*このクラスをクリックすると中身の動きを行う*/
        if($(".header-sp-icon-wrap").hasClass("is-open")){
            $(".header-sp-nav").css("display","none");
            $(".header-sp-icon-wrap").removeClass("is-open");
        }
        else{
        $(".header-sp-nav").css("display","block");
        $(".header-sp-icon-wrap").addClass("is-open");/*addClass=クラス追加＋クリックすると追加される*/
            
        }

   });
});


var pics_src = new Array("images/menu-icon.png","images/menu-icon_batu.png","images/menu-icon.png");
var num = 0;

function slideshow(){
    if (num == 1) {
        num = 0;
    }
    else {
        num ++;
    }
    document.getElementById("mypic").src=pics_src[num];
}

$(function(){
    $('#slick01').slick({
    autoplay: true, //自動再生
    dots: true, //ドットインジケータの表示
    });
    });

    