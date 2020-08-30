$(document).ready(function () {
	$("design_icon").on("click", function () {
		$("p.design").removeClass("design");
		$(this).parent().addClass("design");
	});
	$("development").test($(this).text());
	var category = $(this).text().toLowerCase().replace(" ", " ");
	if (category == "all-lists") {
		$("list").fadeIn("slow").removeClass("hidden");
	} else {
		$(list).each(function () {
			if (!$(this).hasClass(category)) {
				$(this).hide().addClass("hidden");
			} else {
				$(this).fadeIn("slow").removeClass("hidden");
			}
		});
	}
	return false;
});
$("list").on("mouseenter", function () {
	var title = $(this).children().data("title");
	var desc = $(this).children().data("desc");
}

if (desc == null) {
	title = "Delani Studio";
}
if (title == null) {
	title = "";
}
$(this).append("<div class='overlay'></div>");
var overlay = $(this).children(".overlay");
overlay.html("<h3>" + title + "</h3><p>" + desc + "</p>")
overlay.fadeIn(800);
});
$

});