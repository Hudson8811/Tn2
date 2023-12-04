jQuery(function () { 

	// accordions section6
		const accordions = document.querySelectorAll(".accordion");

		const openAccordion = (accordion) => {
				let headerHeight = 0;
					if (window.innerWidth > 1100){
							// headerHeight = $('.fixed-header').outerHeight();
							headerHeight = 53;
					}
			const content = accordion.querySelector(".accordion__content");
			accordion.classList.add("accordion__active");
					var accordionActiveHeaight = $(".accordion__active .accordion__content").height();
					if(typeof(accordionActiveHeaight) === "undefined") {
							accordionActiveHeaight = 0;
					}
			content.style.maxHeight = content.scrollHeight + "px";
					$('html, body').stop().animate({ scrollTop:$(accordion).offset().top - accordionActiveHeaight - headerHeight}, 300);
					
					console.log(accordionActiveHeaight);
					
		};

		const closeAccordion = (accordion) => {
			const content = accordion.querySelector(".accordion__content");
			accordion.classList.remove("accordion__active");
			content.style.maxHeight = null;
		};

		accordions.forEach((accordion) => {
			const intro = accordion.querySelector(".accordion__intro");
			const content = accordion.querySelector(".accordion__content");

			intro.onclick = () => {
				if (content.style.maxHeight) {
					closeAccordion(accordion);
				} else {
									openAccordion(accordion);
									$(accordions).not($(accordion)).each(function(){
											closeAccordion($(this)[0]);
									});
				}
			};
		});

	

	// accordions



});var fabrication;
$('.js-fabrication').each(function(){
	var slider=$(this)
	var fabrication = new Swiper(slider[0], {
		spaceBetween: 30,
		slidesPerView: "auto",
    loop: false,
    speed: 800,
		navigation: {
				nextEl: ".fabrication-next",
				prevEl: ".fabrication-prev"
		},
		breakpoints: {
			// when window width is >= 480px
			992: {
				spaceBetween: 40,
			},
			}
	});
})
