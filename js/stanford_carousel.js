jQuery(document).ready(function($) {
	// Bootstrap Carousel
	$('.carousel').attr('id', 'myCarousel');
	$('.carousel .view-content').addClass('carousel-inner');
	$('.carousel .item:nth-child(1)').addClass('active');
	if ($(".carousel-autoplay")[0]){
		$('.carousel').carousel({
			interval: 6000 // use false to disable auto cycling, or use a number 4000
		});
	} else {
		$('.carousel').carousel({
			interval: false // use false to disable auto cycling, or use a number 4000
		});
	}
});

