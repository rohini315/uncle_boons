$(document).ready(function(){

	var $overlay = $('<div id="overlay"></div>');
	var $image = $("<img>");

	//An image to overlay
	$overlay.append($image);

	//Add overlay
	$("body").append($overlay);

  	//click the image and a scaled version of the full size image will appear
  	$("#photo-gallery a").click( function(event) {
    event.preventDefault();
    var imageLocation = $(this).attr("href");

    //update overlay with the image linked in the link
    $image.attr("src", imageLocation);

    //show the overlay
    $overlay.show();
  	});

  	$("#overlay").click(function() {
    $( "#overlay" ).hide();
 	 });

	var form_content=$('#form_content');
	$(cborder).hide();
	$('#contactBtn').click(function(e){
		$('#thanks').remove();
		$(cborder).show();
	});
	$('#sendButton').click(function(e){
		$(cborder).hide();
		$('#Ccontent').append("<h2 id='thanks'>THANK YOU!<br> I'll GET BACK TO YOU SHORTLY :)<h2>");
	});
});

