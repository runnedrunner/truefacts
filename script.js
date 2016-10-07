function getQuote() {
  $.getJSON('https://api.icndb.com/jokes/random?firstName=Austin&lastName=Zhou', function(data) {
    $('#quote').html(data.value.joke);
    console.log("blah")
  });
};

getQuote();
$('#get_quote').click(getQuote);