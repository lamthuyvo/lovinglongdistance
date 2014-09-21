$(document).ready(function(){
	document.getElementById("emailbox").focus();

	$('#about').click(function(){
		$('#description').toggle().addClass('animated fadeIn');
		$('#subheader').toggle().addClass('animated fadeIn');
	})

	$('#title').click(function(){
		$('#fullvid').toggle().addClass('animated fadeIn');
	})
})