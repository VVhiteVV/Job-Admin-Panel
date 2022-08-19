$(".select,.multi-select").on("click",function (){
    if(!$(this).find('ul').hasClass('select-active')){
        $(this).addClass('select-radius open').find('ul').removeClass('select-disable').addClass('select-active');
    }
    else{
        $(this).removeClass('select-radius open').find('ul').removeClass('select-active').addClass('select-disable');

    }
})


$(".select-item,.multi-select-item").on('click',function(event){
    $(this).parent().parent().children('.select-input').val($(this).text());
    $(this).parent().parent().children('.selected').text($(this).text())
    if(!$(this).find('input[type=checkbox]').is(':checked') && $(this).hasClass('multi-select-item')){
        event.stopPropagation();

        $(this).find('input[type=checkbox]').prop('checked',true).val($(this).find('span').text());
    }
    else if($(this).find('input[type=checkbox]').is(':checked')){
        event.stopPropagation();
        $(this).find('input[type=checkbox]').prop('checked',false).val(null);
    }

})

$('.checkbox-item').on('click',function (){
    let input = $(this).find('input[type=checkbox],input[type=radio]');
   if(!input.is(':checked')){
       $(this).css({
           "background-color":"var(--blue-light)",
       }).find('span').css({
           "color":"white"
       })
       input.prop('checked',true).val($(this).find('span').text());
   }
   else{
       $(this).css({
           "background-color":"white",
       }).find('span').css({
           "color":"var(--gray)"
       })
       input.prop('checked',false).val(null);
   }
})