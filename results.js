// Stores the information from classes.json into a variable
let api = getData();

// Get the search string from sessionStorage
let searchString = sessionStorage.getItem('searchString');
console.log("Search String:", searchString);

// Get the data from classes.json and store it in api
async function getData() {
    let response = await fetch('classes.json');
    let data = await response.json();
    return data;
}

// Populate the page with cards based on the search string
function createCard(university, course) {
    // Create the card container
    const card = document.createElement('div');
    card.className = 'card';

    // Create and set the SVG icon for the university
    const universityLogo = document.createElement('img');
    universityLogo.className = 'card-image';
    universityLogo.src = university.logo;  // Assuming the SVG URL is stored under 'logo' key in classes.JSON
    universityLogo.alt = university.name;
    card.appendChild(universityLogo);

    // Create and set the university name
    const universityName = document.createElement('div');
    universityName.className = 'card-title';
    universityName.textContent = university.name;
    card.appendChild(universityName);

    // Create and set the course code
    const courseCode = document.createElement('div');
    courseCode.className = 'card-text';
    courseCode.textContent = course.course_code;
    card.appendChild(courseCode);

    // Create and set the alternate name
    const alternateName = document.createElement('div');
    alternateName.className = 'card-text';
    alternateName.textContent = course.alternate_name;
    card.appendChild(alternateName);

    // Only go to site for LLM if course seleected is Software 1
    if (university.name === "The Ohio State University" && course.course_code === "CSE 2221") {
        card.addEventListener('click', function() {
            window.location.href = "https://www.google.com";
        });
    } else {
        // Show modal button event listener
        card.addEventListener('click', function() {
            showModal();
        });
    }

    // Assigns colors to each university
    const collegeColor = {
        "The Ohio State University": "#A7B1B7",
        "Georgia Institute of Technology": "#FDB515",
        "Massachusetts Institute of Technology": "#000000",
        "Stanford University": "#B83A4B",
        "University of Michigan": "#00274C",
        "University of California, Berkeley": "#3B7EA1",
        "University of Illinois at Urbana-Champaign": "#FF5F05",
    };

    if (collegeColor[university.name]) {
        card.style.backgroundColor = collegeColor[university.name];
    }

    // Append the card to the card container in the HTML
    document.querySelector('.card-container').appendChild(card);
}

function populatePage() {
    fetch('classes.json')
    .then(response => response.json())
    .then(data => {
        let searchString = sessionStorage.getItem('searchString').toLowerCase();

        data.universities.forEach(university => {
            let universityNameMatch = university.name.toLowerCase().includes(searchString);

            university.classes.forEach(course => {
                let courseCodeMatch = course.course_code.toLowerCase().includes(searchString);
                let alternateNameMatch = course.alternate_name.toLowerCase().includes(searchString);

                if (universityNameMatch || courseCodeMatch || alternateNameMatch) {
                    createCard(university, course);
                }
            });
        });
    });
}

// Call the populatePage function when the page loads
populatePage();


function showModal() {
    const modal = document.getElementById('courseModal');
    modal.style.display = "block";

    const closeBtn = document.querySelector('.close');
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
}
