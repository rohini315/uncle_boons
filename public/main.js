$(document).ready(function(){



  	//click the image and a scaled version of the full size image will appear
  	$("img").click( function(event) {
  	var overlay = $('<div id="light_box"></div>');
	var image = $("<img>");
	console.log(overlay)
	console.log(image)

	//An image to overlay
	overlay.append(image);
	var imageLocation = $(this).attr("src");
	console.log("clicked "+imageLocation)
	    //Add overlay
		$("body").append(overlay);

	    //update overlay with the image linked in the link
	    image.attr("src", imageLocation);
	    

    	$(overlay).click(function() {
		    $(overlay).remove();
		    console.log(overlay +"  hidden!")
		 	 });
  
  	});

});

