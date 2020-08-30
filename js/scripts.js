$(function () {
    let design = $('#design');
    let development = $('#development');
    let product = $('#product');
    let destext = $('#destxt');
    let devtext = $('#devtext');
    let protext = $('#protext');

    $(design).hide();
    $(development).hide();
    $(product).hide();

    //Show paragraph content
    $('.design').on('click', function () {
        $('.design').slideDown('slow');
        $(design).show(500);
        $(destext).animate({fontWeight:'bolder',fontSize:'20px'})

    });
    $('.dev').on('click', function () {
        $('.dev').slideDown('slow');
        $(development).show(600);
        $(devtext).animate({fontWeight:'bolder',fontSize:'20px'})
    });
    $('.product').on('click', function () {
        $('.product').slideDown('slow');
        $(product).show(600);
        $(protext).animate({fontWeight:'bolder',fontSize:'20px'})
	});
	 //Hide paragraph content
	 $(design, destext).on('click', function () {
        $('.design').slideUp();
        $(design).hide(500);
        $(destext).animate({fontWeight:'normal',fontSize:'16px'})
    });
    $(development, devtext).on('click', function () {
        $('.dev').slideUp();
        $(development).hide(600);
        $(devtext).animate({fontWeight:'normal',fontSize:'16px'})
    });
    $(product, protext).on('click', function () {
        $('.product').slideUp();
        $(product).hide(600);
        $(protext).animate({fontWeight:'normal',fontSize:'16px'})
    })

    //Overlay images

    $('.workimg').hover(function(){
        $('.worktext',this).slideToggle('slow');
     }, function(){
        $('.worktext',this).slideToggle('slow');
     });
 //Hide paragraph content
 $(design, destext).on('click', function () {
	$('.design').slideDown();
	$(design).hide(500);
	$(destext).animate({fontWeight:'normal',fontSize:'16px'})
});
$(development, devtext).on('click', function () {
	$('.dev').slideDown();
	$(development).hide(500);
	$(devtext).animate({fontWeight:'normal',fontSize:'16px'})
});
$(product, protext).on('click', function () {
	$('.product').slideDown();
	$(product).hide(500);
	$(protext).animate({fontWeight:'normal',fontSize:'16px'})
})

//Overlay images

$('.workimg').hover(function(){
	$('.worktext',this).slideToggle('slow');
 }, function(){
	$('.worktext',this).slideToggle('slow');
 });

});
