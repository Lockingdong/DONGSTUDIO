let rungraphic = (obj1, obj2, obj3, deg) =>{
  //var deg = 0;
  
  if(deg>180){
  var timer = 0;
  $(obj1).removeClass("rotated");
  //移除.rotated
  clearTimeout(timer);
  timer = setTimeout(function(){
    $(obj1).addClass("rotated");
    //加上.rotated
    $(".rotated").css({"transition-timing-function":"linear","transform": "rotate("+ 180 + "deg)"});
    //.rotated轉90度
    
    var timer2 = 0;
    clearTimeout(timer2);
    timer2 = setTimeout(()=>{
      $(obj3).css("opacity", "0");
      $(obj2).addClass("op1");
      $(obj2).css({"transform": "rotate("+ deg + "deg)"});
    }, 1000);
  
  }, 10);//過0.01秒執行
  }else{
    var timer = 0;
    clearTimeout(timer);
    timer = setTimeout(function(){
      $(obj1).css({"transform": "rotate("+ deg + "deg)"});
    }, 10)
  }
}


//-------------------------------------------
$(window).scroll(()=>{
  console.log($(window).scrollTop())
  if($(window).scrollTop() <= $("#section_about").offset().top){
    $("nav").addClass("navtop").removeClass("navshadow");
  }else{
    $("nav").removeClass("navtop").addClass("navshadow");
  }
  if($(window).scrollTop() >= $("#section_skill").offset().top - 120){
    rungraphic("#skillhtml .rec1", "#skillhtml .rec2", "#skillhtml .rec3", 290);
    rungraphic("#skillcss .rec1", "#skillcss .rec2", "#skillcss .rec3", 270);
    rungraphic("#skillJS .rec1", "#skillJS .rec2", "#skillJS .rec3", 180);
    rungraphic("#skillPS .rec1", "#skillPS .rec2", "#skillPS .rec3", 145);
    rungraphic("#skillAI .rec1", "#skillAI .rec2", "#skillAI .rec3", 145);
    rungraphic("#skillTOEIC .rec1", "#skillTOEIC .rec2", "#skillTOEIC .rec3", 290);

  }
  $(".titlearea").css("bottom",-65-(scrollTop/1.6)+"px");
  $(".bgimg").css("bottom",-(scrollTop/2)+"px");
});
// $(".navbar-toggle").click(function(){
//   if($("nav").css("background-color") == "rgb(245, 245, 245)"){
//     $("nav").removeClass("navdown");  
//   }else{
//     $("nav").addClass("navdown");
//   }
  
// });
//緩慢滑動
$(document).on("click", "li a, a.navbar-brand, .scrolldown a", function(evt){
  //evt.preventDefault();
  var target = $(this).attr("hreftg")
  //alert(target)
  $("html").animate({
    scrollTop: $(target).offset().top + 1
  }, 500);
});
//-----------------------------------------
$("ul.nav li a").click(function(){
  $("ul.nav li a").removeClass("active");
  $(this).addClass("active");
  //alert()
});
//-----------------header act---------------------------
$(window).mousemove(function(evt){
  var x = evt.pageX;
  var y = evt.pageY;
  //console.log(x);
  // $("#cross").css("left", x+"px");
  // $("#cross").css("top", y+"px");
  if(y< $("#section_about").offset().top){
    $(".x1").css("transform", "scale(0.3) translateX("+ (x/-8) +"px)");
    $(".c2").css("transform", "scale(0.3) translateX("+ (x/-12) +"px)");
    $(".c3").css("transform", "scale(0.3) translateX("+ (x/6) +"px)");
    $(".x2").css("transform", "scale(0.4) translateX("+ (x/-6) +"px)");
    $(".x3").css("transform", "scale(0.4) translateX("+ (x/10) +"px)");
    $(".topimg").css("transform", "translateX("+ ((-50) +(x/-250)) +"%)");
  }

});

//---------------------------------------------
var n=1;
$("button.navbar-toggle").click(function(){
  
  if(n%2==1){
    $(".iconbar1").addClass("cross1");
    $(".iconbar2").addClass("cross2");
  }else{
    $(".iconbar1").removeClass("cross1");
    $(".iconbar2").removeClass("cross2");
  }
  n++;
  //console.log(n)
});