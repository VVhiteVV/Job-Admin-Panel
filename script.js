

$('.sideBar-menu__button-hide').click(function (){
   let menu = $('.sideBar-menu');
   if(menu.hasClass('sideBar-disable')){
      menu.removeClass('sideBar-disable').addClass('sideBar-active');
      this.style.right = "-26px";
      this.style.transform = "rotate(180deg)";
   }
   else{
      menu.removeClass('sideBar-active').addClass('sideBar-disable');
      this.style.right = '-13px';
      this.style.transform = "rotate(0deg)"
   }
})