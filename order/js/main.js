$(function(){


    $('.product_list button').click(function(){
        $('.product_list button').removeClass('click')
        $(this).addClass('click');
    });

    $('.list_btn button').click(function(){
        $(this).toggleClass('click');
        $('.list_box li').toggleClass('hidden');
        var buttonText = $(this).find('span').text();
        $(this).find('span').text(buttonText === "접기" ? "더보기" : "접기");
    }).click();

    $('.info_btn').click(function(){
        $(this).next('.toolTip').show()
    })

    $('.check_list>li label').click(function(){
        $('.check_list>li').removeClass('color-bg-select-01')
        $(this).parent().addClass('color-bg-select-01')
    })

    // $('.deposit_num').click(function(){
    //     var text = $(this).text().trim();
    //     var temp = $('<input>');
    //     $('body').append(temp);
    //     temp.val(text).select();
    //     document.execCommand('copy');
    //     temp.remove();

    // });


})