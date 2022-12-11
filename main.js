

function toggleSortButtonState() {
	this.classList.toggle("sort-button--reverse");
	const allInputs = document.querySelectorAll("input");
	console.log(allInputs);
	const inputsArray = Array.prototype.slice.call(allInputs);
	function byField(field) {
		return (a, b) => a[field] > b[field] ? 1 : -1;
	  }
	if (this.classList.contains("sort-button--reverse")) {
		inputsArray.reverse;
		inputsArray.forEach(input => console.log(input.value))
	} else {
		inputsArray.sort(byField('value'));
		inputsArray.forEach(input => input.value = input.value)
	}
	
}

const getInitialInput = () => {
	const li = document.createElement("li");
	li.innerHTML = `
		<input class="list_input" type="text" value="">
		<img class="cancel" src="/images/delete.svg">
	`;
	li.querySelector("img").addEventListener("click", () => {
		li.parentElement.removeChild(li);
	});

	return li;
}


const sortButton = document.getElementById("sort_button");
sortButton.addEventListener("click", toggleSortButtonState);

document.getElementById("add_item").addEventListener("click", () => {
	const newItem = getInitialInput();
	document.getElementById("items_list").append(newItem);
});

document.addEventListener("keypress", function (e) {
	if (e.key === 'Enter') {
		const newItem = getInitialInput();
		document.getElementById("items_list").append(newItem);
	}
});