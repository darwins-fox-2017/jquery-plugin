(function ($) {
	$.fn.emailValidator = function () {

		// your code here
		var reg = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
		return reg.test(this.val());
	}
})(jQuery)
