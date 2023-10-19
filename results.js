// Stores the information from classes.json into a variable
let api = getData();

// Assigning the background color of each card based on the college name
let collegeColor = new Map();
collegeColor.set("The Ohio State University", "#BB0000");
collegeColor.set("Georgia Institure of Technology", "#B3A369");
collegeColor.set("Massechusetts Institute of Technology", "#8a8b8c");
collegeColor.set("Stanford University", "#B83A4B");
collegeColor.set("University of Michigan", "#00274C");
collegeColor.set("University of California, Berkeley", "#003262");


// Get the search string from sessionStorage
let searchString = sessionStorage.getItem('searchString');
console.log("Search String:", searchString);

// Get the JSON data from classes.json
// Populate page with cards which contain the searchString either in the university name, course code, or alternate name
    // Look to Pokémon site for what cards may look like
    // Make card taller slightly, show the unviersity's SVG logo, and the course's alternate name.
// When clicking on any card except OSU's software 1, display a modal which states "In development!"
// When clicking on OSU's software 1 card, it should link to the page where user can chat with the llm finetuned for that specific course





// Get the data from classes.json and store it in api
async function getData() {
    let response = await fetch('classes.json');
    let data = await response.json();
    return data;
}

// Go one level down in api to access the universities, and write a for each loop to traverse it
// For each university, go one level down to access the courses, and write a for each loop to traverse it
// For each course, check if the search string is contained within the university name, course code, or alternate name
    // If it is, then create a card for that course and append it to the page
// Populate the page with cards based on the search string
async function populatePage() {
    let api = await getData();
    let universityArray = api.universities;
    universityArray.forEach(university => {
        let courseArray = university.classes;
        courseArray.forEach(course => {
            if (university.name.includes(searchString) || course.course_code.includes(searchString) || course.alternate_name.includes(searchString)) {
                createCard(university, course);
            }
        });
    });
}

// Create a card for a course and append it to the page
function createCard(university, course) {
    let card = document.createElement('div');
    card.classList.add('card');
    card.style.backgroundColor = collegeColor.get(university.name);
    let cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    let cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = course.course_code; // Changed from course.name to course.course_code
    let cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.textContent = course.alternate_name;
    let cardButton = document.createElement('a');
    cardButton.classList.add('btn');
    cardButton.classList.add('btn-primary');
    cardButton.textContent = 'Go to chat';
    cardButton.href = 'chat.html';
    cardButton.addEventListener('click', () => {
        sessionStorage.setItem('course', JSON.stringify(course));
    });
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(cardButton);
    card.appendChild(cardBody);
    document.querySelector('.card-container').appendChild(card);
}

// Call the populatePage function to display the cards
populatePage();

