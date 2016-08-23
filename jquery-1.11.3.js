$(document).ready(function () {
	// if (jQuery !== undefined) {
	var s = document.createElement('script');
	s.src = chrome.extension.getURL('new 7.js');
	s.onload = function () {
		this.parentNode.removeChild(this);
		var s1 = document.createElement('script');
		s1.src = chrome.extension.getURL('script.js');
		dispatchEvent(new Event('$j'));
		(document.head || document.documentElement).appendChild(s1);
	};
	(document.head || document.documentElement).appendChild(s);
});
