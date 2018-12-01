jQuery(function() {
	// init Isotope
	var $grid = jQuery('.stories-container').isotope({
  		itemSelector: '.element-item',
  		transformsEnabled: false,
  		layoutMode: 'masonry'
  	});

	// bind filter button click
	jQuery('.c2a').on( 'click', 'a', function() {
		var filterValue = jQuery( this ).attr('data-subject');
		if(filterValue !== "*") {
			var valueToClass = "."+filterValue;
		} else {
			valueToClass == filterValue;
		}
		$grid.isotope({ filter: valueToClass });
		jQuery('body').scrollTo(jQuery('.stories-container'), 800);
		return false;
	});

});