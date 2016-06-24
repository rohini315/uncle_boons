$(document).ready(function(){

// For index.erb page

	var block_nav=$("#block_nav");
	var index_nav=$("#index_nav");

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

