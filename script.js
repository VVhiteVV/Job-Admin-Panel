//////////Menu open-close
$('.sideBar-menu__button-hide').click(function (){
   let menu = $('.sideBar-menu');
   let item = $('.sideBar-menu__item');
   let logo = $('.sideBar-menu__logo')
   if(!menu.hasClass('sideBar-active')){
      menu.removeClass('sideBar-disable').addClass('sideBar-active');
      item.find('span').fadeOut(300);
      logo.attr('src','../public/logo-s.png');
      this.style.transform = "rotate(180deg)";

   }
   else{
      menu.removeClass('sideBar-active').addClass('sideBar-disable');
      item.children('a').fadeIn(300);
      logo.attr('src','../public/logo.png');
      this.style.transform = "rotate(0deg)"
   }

})

//////////FileName input-file
$('#input__file').change(function (){
   let file = this.value.split('\\').length;
   let fileName = this.value.split('\\');
   $('.Label-file').text(fileName[file-1]);
})