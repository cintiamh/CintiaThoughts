window.onload=function() {
	var list = document.getElementById('list');
	for (var i = 0; i < list.childNodes.length; i++) {
		if (list.childNodes[i].tagName === "LI") {
			var list_item = list.childNodes[i];
			for (var j = 0; j < list_item.childNodes.length; j++) {
				if (list_item.childNodes[j].tagName === "A") {
					link = list_item.childNodes[j];
					link.addEventListener('click', function(event) {
						event.preventDefault();
						if (this.nextElementSibling.style.display === 'none') {
							this.nextElementSibling.style.display = 'block';
						}
						else {
							this.nextElementSibling.style.display = 'none';
						}
					});
				}
			}
		}
	}
};
