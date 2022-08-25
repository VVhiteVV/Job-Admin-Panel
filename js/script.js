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
      let tr = $(`.${name} table tr:not(:last-child) td:last-child, .${name} table tr:not(:last-child) th:last-child`);
      if(state){
         tr.fadeOut(0)
      }
      else{
         tr.fadeIn(300)
      }
   }


///////////get data input checkbox-radio
   $('input[type=checkbox], input[type=radio]').on("click",function(){

      if($(this).is(":checked")){
         let value = $(this).parent().find('span').text();
         $(this).val(value);
      }
      else{
         $(this).val(null);
      }
   })


/////////href-hover-effect
      $('.sideBar-menu__list li a span').each(function () {
         let location = $('.href-hover').text()
         if(location === $(this).text()) {
            $(this).parent().parent().addClass('sideBar-menu__item-active');
         }
         console.log($(this).text() + '<\br>' + location)
      });

})


///////////Modal window
function Modal(name,close){
   let modal = $(`.${name}`)
   modal.fadeIn(300).css({
      'display': 'flex'
   })
   $(`.${close}`).click(function(){
      modal.fadeOut(300)
   })
   modal.click(function(e) {
      if ($(e.target).closest('.modal-inner').length === 0) {
         $(this).fadeOut(300);
      }

   });
}