
const next = document.getElementById("next");
const prev = document.getElementById("prev");

const circles = document.querySelectorAll(".circle");
const progress = document.querySelector(".progress");

let value = 1;

// Next Button
next.addEventListener("click", () => {

    value = value + 1;

    if (value <= 5) {

        circles.forEach((circle, index) => {

            if (index < value) {
                circle.classList.add("active");
            } else {
                circle.classList.remove("active");
            }

        });

        // Update Progress Bar
        progress.style.width = ((value - 1) / 4) * 100 + "%";

        // Enable Previous Button
        prev.disabled = false;

        // Disable Next at Circle 5
        if (value === 5) {
            next.disabled = true;
        }

    }

});

// Previous Button
prev.addEventListener("click", () => {

    value = value - 1;

    circles.forEach((circle, index) => {

        if (index < value) {
            circle.classList.add("active");
        } else {
            circle.classList.remove("active");
        }

    });

    // Update Progress Bar
    progress.style.width = ((value - 1) / 4) * 100 + "%";

    // Enable Next Button
    next.disabled = false;

    // Disable Previous at Circle 1
    if (value === 1) {
        prev.disabled = true;
    }

});




	

	