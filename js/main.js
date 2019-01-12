$(document).ready(function() {

	$(".story").on("click", function(){
		$("#msg-box").text($(this).find(".story-more").text())
		$("#popup-box").fadeIn(300);
		console.log("fadeIn")
	});
	$("#popup-box").on("click", function(){
		$("#popup-box").fadeOut(300, function(){
			$("#msg-box").text("")
		});
		console.log("fadeOut")
	})
})