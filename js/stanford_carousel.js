jQuery(document).ready(function($) {
  // Bootstrap Carousel
  $('.carousel').attr('id', 'myCarousel');
  $('.carousel .view-content').addClass('carousel-inner');
  $('.carousel .item:nth-child(1)').addClass('active');
  $('.carousel .item').attr('tabindex', '-1');
  $('.carousel .item:nth-child(1)').attr('tabindex', '0');
  // put the ol.carousel-indicators inside the div.carousel-dots
  $('div.view-footer div.carousel-dots').append('<ol class="carousel-indicators"></ol>');
  var dots = [];
  // grab the contents of each h2 and pop it into the 'dots' array
  $('.carousel-inner .views-row h2').each(function()
  {
    var header2 = $(this).text();
    dots.push(header2);
  }
  );
  // If we ended up with an empty array, that means there are no h2 elements.
  // Therefore, it's a carousel without captions.
  if(dots.length == 0) {
    var i = 1;
    $('.carousel-inner .views-row').each(function()
    {
      // Call it "Slide 1", "Slide 2" ,etc.
      var header = "Slide " + i;
      dots.push(header);
      i++;
    }
    );
  }
  // Build the <li> elements inside of ol.carousel-indicators. There should be one <li> element for each slide, that looks like this:
  // <li data=target="myCarousel" data-slide-to="0"><a href="#">Slide Title</a></li>
  $.each(dots, function(key, value)
  {
    plusone = key + 1;
    $('.view-stanford-carousel .views-row-' + plusone + ' img').attr('id', 'stanford-carousel-slide' + plusone);
    $('.carousel-indicators').append('<li data-target="#myCarousel" data-slide-to="' + key + '"><a role="button" href="#stanford-carousel-slide' + plusone +'">' + value + '</a></li>');
  }
  );
  // Add the "active" class to the first <li> element
  $('.carousel-indicators li').first().addClass("active");

  // Run the carousel
  if ($(".carousel-autoplay")[0]){
    $('.carousel').carousel({
      interval: 6000, // use false to disable auto cycling, or use a number 4000
      ariaFocus: true
    });
  } else {
    $('.carousel').carousel({
      interval: false, // use false to disable auto cycling, or use a number 4000
      ariaFocus: true
    });
  }
});

