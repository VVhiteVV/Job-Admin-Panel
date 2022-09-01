$(document).ready(function (){
   let menu = $('.sideBar-menu');
   let item = $('.sideBar-menu__item');
   let logo = $('.sideBar-menu__logo');
   let button_hide = $('.sideBar-menu__button-hide');


//////////Menu open-close
   button_hide.click(function (){
      if(!menu.hasClass('sideBar-active')){
         menu.removeClass('sideBar-disable').addClass('sideBar-active');
         item.find('span').fadeOut(300);
         logo.attr('src','../public/logo-s.png');
         this.style.transform = "rotate(180deg)";
         HiddenCall(false)
         localStorage.setItem('sideBar',1);
      }
      else{
         menu.removeClass('sideBar-active').addClass('sideBar-disable');
         item.find('span').fadeIn(300);
         logo.attr('src','../public/logo.png');
         this.style.transform = "rotate(0deg)";
         HiddenCall(true)
         localStorage.setItem('sideBar',0);
      }

   })

//////////FileName input-file
   $('input[type=file]').change(function (){
      let file = this.value.split('\\').length;
      let fileName = this.value.split('\\');
      $(this).parent().find('label').text(fileName[file-1]);
   })


//////// tr background when input checked

   $('input:checkbox').click(function (){
      if($(this).is(':checked')){
         $(this).parents("tr").css({
            "background": "#F7F8FF"
         })
      }
      else{
         $(this).parents('tr').css({
            "background": "none"
         })
      }
   })
   let trArr = ['tr-user-hide'];
   let HiddenCall = (state) => {
      trArr.forEach((index) => {
         Hidden(index,state);
      })
   }
   HiddenCall(true);

   function Hidden(name,state){
      let tr = $(`.${name} table tr:not(:last-child)`);
      if(state){
         tr.find('.column-hide').fadeOut(0)
      }
      else{
         tr.find('.column-hide').fadeIn(300)
      }
   }


///////////get data input checkbox-radio
   $('input[type=checkbox], input[type=radio]').on("click",function(){

      if($(this).is(":checked") && !$(this).parent().hasClass('checkbox-not-value')){
         let value = $(this).parent().find('span').text();
         $(this).val(value);
      }
      else{
         $(this).val(null);
      }
   })


/////////href-hover-effect
      $('.href-item').each(function () {
         let location = $('.href-hover').text()
         if(location === $(this).text()) {
            $(this).parents('.sideBar-menu__item').addClass('sideBar-menu__item-active');
            $(this).parents('.Registry__item').addClass('Registry__item-active');
         }
      });
})

///////////Modal window
function Modal(name,close){
   let modal = $(`.${name}`)
   if(modal.is(":visible")){
      modal.fadeOut(300);
   }
   else{
      modal.fadeIn(300).css({
         'display': 'flex'
      })
   }

   $(`.${close}`).click(function(){
      modal.fadeOut(300)
   })
   modal.click(function(e) {
      if ($(e.target).closest('.modal-inner').length === 0) {
         $(this).fadeOut(300);
      }

   });
}

//////////////Drop-down window

$('.Drop-down').on('click',function (){
   let content = $(this).find('.Drop-down-content');
   if(!content.is(":visible")){
      content.fadeIn(300);
   }
   else{
      content.fadeOut(300);
   }
   content.find('.Drop-down-close').on('click',function (event){
      event.stopPropagation()
      content.fadeOut(300);
   })

})

$('.Drop-down-content').on('click',function (event){
   event.stopPropagation();
})

////////////Horizontal scroll

$('.horizontal-scroll').bind('mousewheel DOMMouseScroll',function(event){
   this.scrollLeft -= event.originalEvent.wheelDelta;
   event.preventDefault();
})