$(function() {

	'use strict';

	// Form
	const form = document.getElementById('dynamicForm');
	const additionalFields = document.getElementById('additionalFields');
	const addAnotherBtn = document.getElementById('addAnother');
  
	let fieldIndex = 2; // Start with the second item
  
	addAnotherBtn.addEventListener('click', () => {
	  const newField = document.createElement('div');
	  newField.classList.add('form-group');
	  newField.innerHTML = `
		<div class="form-group">
		  <label for="shirt${fieldIndex}">Shirt ${fieldIndex}:</label>
		  <select name="shirt${fieldIndex}" id="shirt${fieldIndex}">
			<option value="">Select an item</option>
			<option value="option1">Option 1</option>
			<option value="option2">Option 2</option>
			<!-- Add more options as needed -->
		  </select>
		

		  <select name="size${fieldIndex}" id="size${fieldIndex}">
			<option value="">Select a Size</option>
			<option value="option1">Option 1</option>
			<option value="option2">Option 2</option>
			<!-- Add more options as needed -->
		  </select>
		
		
		  <select name="color${fieldIndex}" id="color${fieldIndex}">
			<option value="">Select a Color</option>
			<option value="option1">Option 1</option>
			<option value="option2">Option 2</option>
			<!-- Add more options as needed -->
		  </select>
  
	
		  
		  <input type="number" name="quantity${fieldIndex}" id="quantity${fieldIndex}" min="1" value="1">
		</div>
	  `;
	  additionalFields.appendChild(newField);
	  fieldIndex++;
	});

	
  
	form.addEventListener('submit', (event) => {
	  event.preventDefault();
	  // Here you can handle form submission, e.g., gather form data and send it to the server
	  console.log('Form submitted!');
	});
	var contactForm = function() {

		if ($('#contactForm').length > 0 ) {
			$( "#contactForm" ).validate( {
				rules: {
					name: "required",
					email: {
						required: true,
						email: true
					},
					message: {
						required: true,
						minlength: 5
					}
				},
				messages: {
					name: "Please enter your name",
					email: "Please enter a valid email address",
					message: "Please enter a message"
				},
				/* submit via ajax */
				submitHandler: function(form) {		
					var $submit = $('.submitting'),
						waitText = 'Submitting...';

					$.ajax({   	
				      type: "POST",
				      url: "php/send-email.php",
				      data: $(form).serialize(),

				      beforeSend: function() { 
				      	$submit.css('display', 'block').text(waitText);
				      },
				      success: function(msg) {
		               if (msg == 'OK') {
		               	$('#form-message-warning').hide();
				            setTimeout(function(){
		               		$('#contactForm').fadeOut();
		               	}, 1000);
				            setTimeout(function(){
				               $('#form-message-success').fadeIn();   
		               	}, 1400);
			               
			            } else {
			               $('#form-message-warning').html(msg);
				            $('#form-message-warning').fadeIn();
				            $submit.css('display', 'none');
			            }
				      },
				      error: function() {
				      	$('#form-message-warning').html("Something went wrong. Please try again.");
				         $('#form-message-warning').fadeIn();
				         $submit.css('display', 'none');
				      }
			      });    		
		  		}
				
			} );
		}
	};
	contactForm();

});