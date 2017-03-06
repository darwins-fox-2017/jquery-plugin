(function ($) {
	$.fn.emailValidator = function () {
		var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		let email = this.val()
		return regex.test(email);
	}
})(jQuery)
