$(document).ready(function(){
	
	var	screen_width = window.innerWidth;
	
	//code to play trailer for project 
	$('#title').on("click",function(){
		$('#title').css('display', 'none')
		$('.full-vid-wrapper').toggle().addClass('animated fadeIn');
		$('#fullvid').attr('src', 'http://player.vimeo.com/video/107348115?title=0&amp;byline=0&amp;portrait=0&amp;color=ff0179&amp;autoplay=1');
	})

	//code to exit video
	$('#exit-vid').on("click",function(){
		$('.full-vid-wrapper').hide();
		$('#fullvid').removeAttr('src');
		$('#title').css('display', 'block')
	})
	
	// this is to set the vimeo player heights for the trailer
	if (screen_width < 600){
		$('.vimeo-iframe2').attr('height', (screen_width/1.777777));
		$('#video').hide();

	} else {
		$('.vimeo-iframe2').attr('height', 337);
	}

	$('.vimeo-iframe').attr('height', (screen_width/1.777777));

	//for googleform
	$('#ss-form').submit(function(){
       $(this).hide();
       $('#lld-submit-page').show();
	});
		
});