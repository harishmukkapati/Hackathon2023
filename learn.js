// Get references to the search bar and search button
const searchBar = document.querySelector('.search-bar');
const searchButton = document.querySelector('.search-button');

// Function to handle search
// Function to handle search
function handleSearch(event) {
    event.preventDefault();

    // Hide the search bar and button
    searchBar.style.opacity = '0';
    searchButton.style.opacity = '0';

    // Display the loading circle
    const loadingCircle = document.querySelector('.loading-circle');
    loadingCircle.style.display = 'block';

    // Store the search string for later use
    sessionStorage.setItem('searchString', searchBar.value);
    console.log("Setting searchString:", searchBar.value);

    // Use a timeout to simulate a loading time and then redirect
    setTimeout(() => {
        window.location.href = 'results.html';
    }, 100);  // Redirect after 2 seconds. Adjust as necessary.
}


// Add event listeners for 'enter' key press and button click
searchBar.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        handleSearch(event);
    }
});

searchButton.addEventListener('click', handleSearch);
