
const sectionKaartje = document.querySelector('.kaartje');


const buttonVisitekaartje = document.querySelector('.visitekaartje');
const buttonMediahuis = document.querySelector('.ul-buttons li:nth-of-type(2)');
const buttonAccessdash = document.querySelector('.ul-buttons li:nth-of-type(3)');
const buttonILW = document.querySelector('.ul-buttons li:nth-of-type(4)');
console.log(buttonVisitekaartje);
console.log(buttonMediahuis);
console.log(buttonAccessdash);
console.log(buttonILW);


const ulButtons = document.querySelector('.ul-buttons');


whichButton(ulButtons);


function whichButton(clickedButton) {
	clickedButton.addEventListener('click', (e) => {
		// zoek de button die geklikt wordt
		console.log(e.target);

		// selecteer de meest dichtstbijzijnde li bij de geklikte button
		let li = e.target.closest("li");
		// zoek de parrent van die li
		let ul = li.parentElement;
		// zoek de index van de li. is het de 1ste, 2de, 3de of 4de in de ul.
		let index = Array.from(ul.children).indexOf(li);
		console.log("index: " + index + " in de ul");

		// voeg classes toe afhankelijk van de geklikte button
		if (index == 0) {
			console.log("eerste button");
			buttonVisitekaartje.classList.toggle("active-visite");
			sectionKaartje.classList.toggle("active-visite");
		}
		else if (index == 1) {
			console.log("tweede button");
			buttonVisitekaartje.classList.toggle("active-Mediahuis");
			sectionKaartje.classList.toggle("active-Mediahuis");
		}
		else if (index == 2) {
            console.log("derde button");
			buttonVisitekaartje.classList.toggle("active-Accessdash");
			sectionKaartje.classList.toggle("active-Accessdash");
        }
		else if (index == 3) {
            console.log("vierde button");
			buttonVisitekaartje.classList.toggle("active-ILW");
			sectionKaartje.classList.toggle("active-ILW");
        }
	});
}



// uncheck a checkbox when a new one is checked
document.querySelectorAll("input").forEach(checkbox => {
	checkbox.addEventListener("change", function () {
		document.querySelectorAll("input").forEach(other => {
			if (other !== this) other.checked = false; // Uncheck all others
		});
	});
});
