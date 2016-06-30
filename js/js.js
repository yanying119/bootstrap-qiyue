$(function(){	
	$(".col-sm-4").each(function(){
		var height = $(this).find(".img").outerHeight();
		console.log(height);
		$(this).css("height",height);
		$(this).find(".jianjie").css("height",height);
	});
});