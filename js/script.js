// Creating proxies to access elements in our html
// hanapin si class .trainee__nav__link sa html at ibigay kay batchNav
const batchNav = document.querySelectorAll(".trainee__nav__link");
const batchContent = document.querySelectorAll(".batches__tab__content");

// this is basically a for i loop done in an array batchNav is our array batch is the 'i'
batchNav.forEach((batch) => {
    batch.addEventListener("click", () => { // addEventListener waits for events such as clicks and hovers in the html
        removeActiveBatch(); // calls the function to remove active on previous element
        batch.classList.add("active"); // add active class to clicked element
        // batch.id pamula sa paghanap kay class .trainee_nav__link active kunin si id ma .trainee-[#] at lagyan ng -content sa dulo para makuha id sa mga .batches__tab__content classes
        // querySelector imbis na querySelectorAll dahil isa lang trainee-[number]-content natin hahanapin lang sa element na may .trainee__nav__link
        // pangalanan proxy ng nahanap na .trainee-[number]-content na activeContent
        const activeContent = document.querySelector(`#${batch.id}-content`);
        removeActiveContent(); // tanggalin active sa dating napindot na trainee-[number]-content element sa class
        activeContent.classList.add("active"); // lagyan napindot na .trainee-[#]-content ng active sa class
    });
});

// removes the active class on the currently active element
function removeActiveBatch() { // name() = returns something
    batchNav.forEach((batch) => {
        batch.classList.remove("active");
});
}

function removeActiveContent() {
    batchContent.forEach((batch) => {
        batch.classList.remove("active");
    });
}

const header = document.querySelector(".header");
const batches = document.querySelector(".batches__tab__ul");

// kaya di na tayo naggawa ng const na window dahil meron na tayo ng 'window' na proxy ng browser
window.addEventListener("scroll", () => { // makinig sa kada scroll ng browser
    console.log(window.scrollY); // isulat sa console gamit ang function log ang kada scroll
    if (window.scrollY >= 20) { // pagpumatak ng 20px and above ang page sa browser lagyan ng active class ang header
        header.classList.add("active");
        batches.classList.add("gray");
    } else { // else tanggalin ang active class ng header
        header.classList.remove("active");
        batches.classList.add("gray");
    }
});