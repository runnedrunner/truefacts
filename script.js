function getQuote() {
  $.getJSON('https://api.icndb.com/jokes/random?firstName=' + FirstName + 'lastName, function(data) {
    $('#quote').html(data.value.joke);
    console.log("blah");
  });
};
console.log("stuff");
getQuote();
$('#get_quote').click(getQuote);