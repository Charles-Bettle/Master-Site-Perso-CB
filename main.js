/*JJS POP UP*/

$(function(){

	$('.fa-times-circle-o').on('click',function(){
		$('.modal').addClass('close');
		$('.modal').removeClass('open');
	});


	$('.contactPopUp').on('click',function(){
		$('.modal').addClass('open');
		$('.modal').removeClass('close');
	});

	/*JS SCROLL SECTION MEDIA*/
	$('.accordeon-content a').on('click', function(event){
	    event.preventDefault();
	    // console.log(this);
	    // alert('coucou');
	    $('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top-50
	    }, 500);
	});

});




