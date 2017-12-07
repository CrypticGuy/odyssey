$("#nav-icon1").on("click", function() {
	$(this).toggleClass("open");
	if ($(".nav").hasClass("animated fadeIn")) {
		$(".nav").removeClass("animated fadeIn");
		$(".nav").addClass("animated fadeOut");
	}
	else {
		$(".nav").removeClass("animated fadeOut");
    $(".nav").addClass("animated fadeIn");
	}
});
