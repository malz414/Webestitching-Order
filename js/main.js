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
		if ($('#contactForm').length > 0) {
			$("#contactForm").validate({
				// Your validation rules and settings
				// ...
	
				submitHandler: function(form) {
					var $submit = $('.submitting'),
						waitText = 'Submitting...';
	
					// Display "Submitting..." message
					$submit.css('display', 'block').text(waitText);
	
					// Append dynamically added sections to the form
					$('#dynamicForm .dynamic-section').each(function() {
						$(this).appendTo(form);
					});
	
					// Submit the form
					form.submit();
				}
			});
		}
	};
	
	// Call the function to initialize the form validation
	contactForm();

});