//** const thisThing = {} the brackets means object
const frontRowApp = {
  key: "85d8dfab3c35adb5014dbe7716692f9e",
};

frontRowApp.getMoviePoster = function(userMovie) {
  $.ajax({
    url: `https://api.themoviedb.org/3/search/movie`,
    method: 'GET',
    format: 'json',
    data: {
      api_key: "85d8dfab3c35adb5014dbe7716692f9e",
      query: `${userMovie}`
    }
  }).then(function(data){
    // console.log(data.results[0].poster_path);
    // console.log(data.results[0])
    frontRowApp.displayPoster(data.results[0]);
  });
}

frontRowApp.displayPoster = function(poster){
  //building an html for each of the movie posters to display in our UI so we
  //store it in a variable called posterHtml
    //if the user movie has a poster

    let posterPieceHtml = `
    <div class="piece">
      <h2>${poster.original_title}</h2>
      <img src="https://image.tmdb.org/t/p/w500${poster.poster_path}" alt="">
      <p>${poster.overview}</p>
      <p>Release date: ${poster.release_date}</p>
    </div>`
    $('#poster').empty();
    $('#poster').append(posterPieceHtml);
    $('form').reset(posterPieceHtml);
}



frontRowApp.init = function() {
  $('.movieForm').on('submit', function(event){
    event.preventDefault();
    const userMovie = $('#term').val();
    console.log(userMovie)
    const moviePoster = frontRowApp.getMoviePoster(userMovie);

  });
}


$(function() {
  frontRowApp.init();
});




