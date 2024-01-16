document.addEventListener("DOMContentLoaded", () => {
    
    fetch("db.json")
        .then(response => response.json())
        .then(data => {
            const movieList = document.getElementById("films");
            data.films.forEach(movie => {
                const listItem = document.createElement("li");
                listItem.textContent = movie.title;
                listItem.classList.add("film", "item");
                listItem.addEventListener("click", () => {  
                    displayMovieDetails(movie);
                });
                movieList.appendChild(listItem);
            });
            displayMovieDetails(data.films[0]);
        });

    
    function displayMovieDetails(movie) {
        const moviePoster = document.getElementById("movie-poster");
        const movieTitle = document.getElementById("movie-title");
        const movieRuntime = document.getElementById("movie-runtime");
        const movieShowtime = document.getElementById("movie-showtime");
        const availableTickets = document.getElementById("available-tickets");
        const buyTicketButton = document.getElementById("buy-ticket");

        moviePoster.src = movie.poster;
        movieTitle.textContent = movie.title;
        movieRuntime.textContent = movie.runtime;
        movieShowtime.textContent = movie.showtime;
        availableTickets.textContent = movie.capacity - movie.tickets_sold;

        
        buyTicketButton.onclick = () => {
            const currentAvailableTickets = parseInt(availableTickets.textContent);
            if (currentAvailableTickets > 0) {
                availableTickets.textContent = currentAvailableTickets - 1;
            } else {
                alert("Sorry, this show is sold out!");
            }
        };
    }
});
