jQuery(function () {
	//form  validation
	jQuery("#submitbutton").click( function () {	
		showMsg = false;
		
		var dropdownv = jQuery(".dropdown").val();
		var ddv = jQuery(this).val();
		
		jQuery("input:not(.notreq), select:not(.notreq)").each( function () {
			if (this.value == '') {
				jQuery(this).addClass('isEmpty');
				showMsg = true;
				}
			else {
			jQuery(this).removeClass('isEmpty');
			}
		});

		emailMsg=false;
		emailfilter=/^\w+[\+\.\w-]*@([\w-]+\.)*\w+[\w-]*\.([a-z]{2,4}|\d+)$/i;
		emailv = jQuery("input[id='email']").val();	
	
		if (!emailfilter.test(emailv)) var emailMsg=true;			
		if (showMsg) jQuery(window).humanMsg('Please fill out all marked fields', { autoHide : 2300 });	
		if (emailMsg){
			jQuery(window).humanMsg('Please enter a valid email address', { autoHide : 2300 });
			jQuery("input[id='email']").addClass('isEmpty').focus();}
					
		if (!showMsg && !emailMsg) {
			jQuery("form").submit();
		}
	});
});