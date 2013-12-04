window.onload=function() {
	var list = document.getElementById('list');
	for (var i = 0; i < list.childNodes.length; i++) {
		iterate_list_item(list.childNodes[i]);
	}
};

function iterate_list_item(list_item) {
	if (list_item.tagName === "LI") {
		for (var j = 0; j < list_item.childNodes.length; j++) {
			iterate_details(list_item.childNodes[j]);
		}
	}
}

function iterate_details(link) {
	if (link.tagName === "A") {
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
