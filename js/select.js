$(".select").on("click",function (){
    if(!$(this).find('ul').hasClass('select-active')){
        $(this).find('ul').removeClass('select-disable').addClass('select-active');
        $(this).addClass('select-radius');
    }
    else{
        $(this).find('ul').removeClass('select-active').addClass('select-disable');
        $(this).removeClass("select-radius");
    }
})



$(".select-item").on('click',function(){
    $(this).parent().parent().find('input').val($(this).text());
})
