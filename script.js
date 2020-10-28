$(function(){


var pagetop=$('#backtop');
pagetop.hide();

$(window).scroll(function(){
  if($(this).scrollTop()>1000){
    //---- 画面を1000pxスクロールしたらボタンを表示
    pagetop.fadeIn();
  }else{
    //---- 画面が1000pxより上ならボタンを表示しない
    pagetop.fadeOut();
  }
});

$(pagetop).click(function(){
$('html,body').animate({
  'scrollTop':0

},500)

});

});