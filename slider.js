$(function() {

	var width = 576;
	var animationSpeed = 2000;
	var pause = 5000;
	var currentSlide = 2;

	//cache DOM
	var $slider = $('#slider');
	var $slides = $slider.find('.slides');
	var $slide = $slides.find('.slide');
	
	var interval;

	$('.slide-id').text(currentSlide);

	function slideRight() {
		$slides.animate({'margin-left': '-=' + width}, animationSpeed, function() {
			currentSlide++;
			$('.slide-id').text(currentSlide);
			if (currentSlide == $slide.length)	{//if the current slide is the same as the length aka the last slide	
				$('.slide-id').text(currentSlide);
				currentSlide = 2;
				$slides.css('margin-left',-576);
			}
		});
	}

	function slideLeft() {
		$slides.animate({'margin-left': '+=' + width}, animationSpeed, function() {
			currentSlide--;
			if (currentSlide == 1)	{//if the current slide is the first slide
				currentSlide = $slide.length - 1;
				$slides.css('margin-left',-2304);
			}
		});
	}

	function startSlider() {
		interval = setInterval(function() {
			slideRight();
		}, pause);	
	}

	function pauseSlider() {
		clearInterval(interval);
	}
	
	$('.fa-arrow-circle-o-left').on('click', slideLeft);

	$('.fa-arrow-circle-o-right').on('click', slideRight);

	startSlider();

	$slider.on('mouseenter', pauseSlider).on('mouseleave', startSlider);


});