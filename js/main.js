



$('.switch').on('click', function(e) {

var on = $('button').hasClass('on')

var off = $('button').hasClass('off')


if(on == true){

	
	$('button').addClass('off');
	
	$('button').removeClass('on');

	$('body').addClass('dark');

	$('body').removeClass('light');	

	$('.status').text("Hey, who turn off the lights?");

}

if (off == true){

	
	$('button').addClass('on');
	
	$('button').removeClass('off');

	$('body').addClass('light');

	$('body').removeClass('dark');

	$('.status').text(" It's so bright in here! ");



}

});