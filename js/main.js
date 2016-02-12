$( document ).ready(function() {

	$('.view-details').on('click', function(event){
		var targetElement = event.target;
	   // Within that parent, all the elements that have the class `details`.
		var container = targetElement.parentElement.parentElement;
		
		$(container).find('.details').each(function(index, el){
		    // Toggle visibility of all the elements within that parent with the class `details`.
			// Change the text of the "view details" button to read "hide details" so the user
  		    // understands they can hide the text again.
			if($(el).is(':visible')) {
// 				console.log($(el));
			   $(el).fadeOut();
			   targetElement.innerText = 'show details';
			} else {
// 				console.log($(el));
			   $(el).fadeIn();
			   targetElement.innerText = 'hide details';
			}
		});
	});

	
});