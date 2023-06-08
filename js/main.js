console.log("Ready!");

// Function to fetch and display movie data
function getMovie() {
    const url = "https://watchable.p.rapidapi.com/movie/list?limit=25";
    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key":
                "f48d6d2748mshb5abebe271bbfd8p17e153jsn34b948402662",
            "X-RapidAPI-Host": "watchable.p.rapidapi.com",
        },
    };

    fetch(url, options)
        .then((response) => response.json())
        .then((data) => {
            const movieElement = document.getElementById("movie");
            const randomIndex = Math.floor(
                Math.random() * (data.data.movies.length - 1)
            );
            const randomMovie = data.data.movies[randomIndex];

            movieElement.innerHTML = `
                      <p>${randomMovie.title}</p>
                      <img class="img-box" src="${randomMovie.image.url}">`;
        })
        .catch((error) => {
            console.log("Error:", error);
        });
}

// Add event listener to the button
const generateButton = document.getElementById("generateMv");
generateButton.addEventListener("click", getMovie);

function postMovie(event) {
    event.preventDefault();

    const url = "https://watchable.p.rapidapi.com/movie/request";
    const options = {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "X-RapidAPI-Key":
                "f48d6d2748mshb5abebe271bbfd8p17e153jsn34b948402662",
            "X-RapidAPI-Host": "watchable.p.rapidapi.com",
        },
        body: {
            imdbId: mvInput.value,
            notes: mvNotes.value,
        },
    };

    fetch(url, options)
        .then((response) => response.json())
        .then((data) => {
            alert("Your request was submitted!");
        })
        .catch((error) => {
            console.log("Error:", error);
        });
}

const mvForm = document.getElementById("mvForm");
const mvInput = document.getElementById("mvImdb");
const mvNotes = document.getElementById("mvNotes");

// Add event listener to the button
mvForm.addEventListener("submit", postMovie);
