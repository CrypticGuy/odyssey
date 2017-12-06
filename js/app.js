$("#nav-icon1").on("click", function() {
	$(this).toggleClass("open");
	if ($("main").hasClass("animated fadeIn")) {
		$("main").removeClass("animated fadeIn");
		$("main").addClass("animated fadeOut");
	}
	else {
		$("main").removeClass("animated fadeOut");
    $("main").addClass("animated fadeIn");
	}
});