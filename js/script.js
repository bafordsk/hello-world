(function ($) {
	//Remove hash from url
	function removeLocationHash() {
		var noHashURL = window.location.href.replace(/#.*$/, "");
		window.history.replaceState("", document.title, noHashURL);
	}
	window.addEventListener("popstate", function (event) {
		removeLocationHash();
	});
	window.addEventListener("hashchange", function (event) {
		event.preventDefault();
		removeLocationHash();
	});
	window.addEventListener("load", function () {
		removeLocationHash();
	});

	// $("a").click(function(event){
	// 	event.preventDefault();
	// });

	//pridanie atr selected jednemu elementu a odobranie vsetkym innym
	$(".controls")
		.find("a")
		.on("click", function (event) {
			$(this)
				.parent()
				.addClass("selected") // toto rodicovi (li element) prida class selected
				.siblings()
				.removeClass("selected"); // toto surodencom rodica (vsetky ostatne li) odoberie class selected

			// zabranime klasickej akcii, nech nikam neodideme
			event.preventDefault();
		});
	// prepinanie medzi galeriamy
	var galleries = $(".gallery-set"),
		menuLinks = $(".controls a");

	// skryjeme vsetky galerie, okrem prvej
	galleries.not(":first").hide();

	// po kliknuti na link ideme robit veci
	menuLinks.on("click", function (event) {
		// ked sa pozrieme do HTML, vidime, ze hodnota href linku sa rovna idcku prislusnej sekcie
		var id = $(this).attr("href");

		// skryjeme galerie
		galleries.hide();

		// kedze href je rovny idcku galeriu, mozeme ju podla neho vytiahnut a nechat zobrazit
		// toto je to iste, ako keby sme napisali napr. $('#video').fadeIn();
		$(id).fadeIn(400);

		// klasika
		event.preventDefault();
	});

	//zmena opacity a velkosti ked sa prejde myskou cez jednotlive obrazky
	var gallery = $(".gallery"),
		startingOpacity = gallery.find("img").css("opacity");

	gallery.find("img").on("mouseenter mouseleave", function (event) {
		var opacity = event.type === "mouseenter" ? 1 : startingOpacity;
		$(this).stop().fadeTo(0.3, opacity);
	});
	//overlay po kliknuti na obrazok aby sa otvorila vo velkom rozliseni
	// var overlay = $('<div/>' , { id: 'overlay'});
	// 	overlay.appendTo('body').hide();

	// gallery.find("a").on("click", function(){

	// 	var href  = $(this).attr('href'),
	// 		image = $('<img>', {src : href});

	// 		overlay.html( image ).show();

	// 	// overlay.show();
	// 	event.preventDefault;

	// });
	// overlay.on('click', function (){
	// 	overlay.hide();
	// });

	// $(document).on("keyup" , function(){
	// 	if ( event.which === 27 ) overlay.hide();
	// });
	//back to top
	var backToTop = $("<a>", {
		href: "#top",
		class: "back-to-top",
		html: '<i class="fa fa-caret-up fa-5x"></i>',
	});

	backToTop
		.hide()
		.appendTo("body")
		.on("click", function () {
			$("body").animate({ scrollTop: 0 });
		});

	var win = $(window);

	win.on("scroll", function () {
		if (win.scrollTop() >= 300) backToTop.fadeIn();
		else backToTop.hide();
	});

	AOS.init();

	// You can also pass an optional settings object
	// below listed default settings
	AOS.init({
		// Global settings:
		disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
		startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
		initClassName: "aos-init", // class applied after initialization
		animatedClassName: "aos-animate", // class applied on animation
		useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
		disableMutationObserver: false, // disables automatic mutations' detections (advanced)
		debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
		throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

		// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
		offset: 120, // offset (in px) from the original trigger point
		delay: 0, // values from 0 to 3000, with step 50ms
		duration: 400, // values from 0 to 3000, with step 50ms
		easing: "ease", // default easing for AOS animations
		once: false, // whether animation should happen only once - while scrolling down
		mirror: false, // whether elements should animate out while scrolling past them
		anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
	});
})(jQuery);
