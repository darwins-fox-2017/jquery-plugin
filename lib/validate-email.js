(function ($) {
	$.fn.emailValidator = function () {

		// your code here
  var rgx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	let email = this.val()

  return rgx.test(email);
	}

$("#validate").bind("click", validate);
})(jQuery)
