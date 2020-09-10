$(function(){
  var pagetop=$('#page-top');
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
  
  $('#page-top').click(function(){
  $('html,body').animate({
    'scrollTop':0
  
  },500)
  
});
  
$('.search').click(function(){
  $('.remodal-s').fadeIn();
  });

  $('.close').click(function() {
    $('.remodal-s').fadeOut();
  });

$('.sp-menu').click(function(){
  $('.remodal-m').fadeIn();
  });

  $('.close2').click(function() {
    $('.remodal-m').fadeOut();
  });


  });