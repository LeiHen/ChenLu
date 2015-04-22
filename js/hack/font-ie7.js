
(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon_nav': '&#xe607;',
		'icon_clock': '&#xe600;',
		'icon_minus': '&#xe601;',
		'icon_plus': '&#xe602;',
		'icon_cancel': '&#xe603;',
		'icon_question': '&#xe604;',
		'icon_comment': '&#xe605;',
		'icon_tag': '&#xe606;',
		'icon_search': '&#xe986;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon_[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());