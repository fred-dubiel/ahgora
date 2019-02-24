

	function createUri(parameter, query) {
		var APIKEY = "82fbca74";
		var uri = "http://www.omdbapi.com/?" + parameter+ "=" + query + "&type=movie&apikey=" + APIKEY  ;

		return uri
	}

	function createUriSearch(search) {
		 return createUri("s", search);
	}

	function createUriMovie(title) {
		return createUri("i", title);
	}

	function handlePoster(movie) {
		var poster = "img/noImg.png";

		if (movie.Poster !== "N/A") {
			poster = movie.Poster;
		}

		return poster;

	}


	function populateMovieModal(movie)
    {
    	var newModal = $("#myModal").clone();
    	var modalMovieTitle = newModal.find(".modal-body-title");
    	var modalMoviePlot = newModal.find(".modal-body-plot");
    	var modalMoviePoster = newModal.find(".modal-body-poster");
		var modalMovieYear = newModal.find(".modal-body-year");
		var modalMovieGenre = newModal.find(".modal-body-genre");
    	var modalMovieDirector = newModal.find(".modal-body-director");
    	var modalMovieAwards = newModal.find(".modal-body-awards");

    	newModal.attr("id", "movie-modal-" + movie.imdbID);
		newModal.addClass("isCreated");



    	modalMovieTitle.text(movie.Title);
    	modalMoviePlot.text(movie.Plot);
    	modalMoviePoster.attr("src", handlePoster(movie));
    	modalMovieYear.text(movie.Year);
    	modalMovieGenre.text(movie.Genre);
    	modalMovieDirector.text(movie.Director);
    	modalMovieAwards.text(movie.Awards);
    	
    	return newModal;
    }

    function populateMovieLine(movie)
    {
    	var newElement = $("#movie-line").clone();

    	newElement.attr("id", "movie-" + movie.imdbID);
    	newElement.addClass("isCreated");
    	

    	var movieTitle = newElement.find("#movie-title");
    	var movieYear = newElement.find("#movie-year");
    	var movieGenre = newElement.find("#movie-genre");

    	movieTitle.attr("id", "movie-title-" + movie.imdbID);
    	movieTitle.attr("data-target", "#movie-modal-" + movie.imdbID);
    	movieYear.attr("id", "movie-year-" + movie.imdbID);
    	movieGenre.attr("id", "movie-genre-" + movie.imdbID);

    	movieTitle.text(movie.Title);
    	movieYear.text(movie.Year);
    	movieGenre.text(movie.Genre);
		newElement.removeClass("visuallyhidden");
    	
    	return newElement;
    }


    function renderMovie(movie) {   
    	$("#movie-list").append(populateMovieLine(movie)); 	
    	$("#movie-list").append(populateMovieModal(movie));
    }

	function handleMovie(movie) {
		$.ajax({
				url: createUriMovie(movie.imdbID),
				success: function(result){
				renderMovie(result)
			},
				error: function(result){
					alert("Mostra ERRO corpo");
			}
		});
	}

	function handleSearch(result) {
		if (result.Response === "True") {
			result.Search.forEach(handleMovie)	;
			return true;

		}

		alert("Pesquisa inválida, tente novamente");
		return false;		
	}

	function removePrevious() {
		$(".isCreated").remove();
	}

	function findMovies() {
		removePrevious();
		$.ajax({
			url: createUriSearch($("#query-string").val()),
			success: function(result){
				handleSearch(result)
			  }
		});
	}




$(document).ready(function() {

 $("#search-form").submit(function (event){
 	event.preventDefault();
 	findMovies();
 });
});

