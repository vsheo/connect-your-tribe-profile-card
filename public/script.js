const checkboxes = document.querySelectorAll("input[type='checkbox']");

// uncheck alle checkboxes, behalve de nieuwe die geklikt is.
function removeChecked(clickedCheckbox) {
	// Loop door alle checkboxes en verwijder het checked attribuut, behalve bij de nieuw geklikte checkbox.
    checkboxes.forEach(checkbox => {
        if (checkbox !== clickedCheckbox) {
            checkbox.checked = false;
        }
    });
}

// luister naar een checkbox die geklikt wordt
function newChecked() {
    checkboxes.forEach(checkbox => {
		// luister bij alle checkboxes naar een click
        checkbox.addEventListener("click", (e) => {
			// e.target is het element waarop net een interactie is uitgevoerd
            removeChecked(e.target);
        });
    });
}

// roep de functie aan
newChecked();
