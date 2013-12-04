// iterate over a list item's contents:
//   - the link that triggers the event to hide and show the details
//   - the div containing the extra information that will be hidden/shown
function iterate_details(link) {
	if (link.tagName === "A") {
		// the details starts hidden (cleans the list)
		link.nextElementSibling.style.display = 'none';
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

// iterate over the list to get each item's information
function iterate_list_item(list_item) {
	if (list_item.tagName === "LI") {
		for (var j = 0; j < list_item.childNodes.length; j++) {
			iterate_details(list_item.childNodes[j]);
		}
	}
}

// Waits the page to be loaded to run.
window.onload=function() {
	var list = document.getElementById('list');
	for (var i = 0; i < list.childNodes.length; i++) {
		iterate_list_item(list.childNodes[i]);
	}
};