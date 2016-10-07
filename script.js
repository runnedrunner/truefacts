function getQuote() {
  var first = $('#first').val();
  console.log(first);
  var last = $('#last').val();
  if (first )
  $.getJSON('https://api.icndb.com/jokes/random?firstName=' + first + '&lastName=' + last, function(data) {
    $('#quote').html(data.value.joke);
  });
};
console.log("stuff");
getQuote();
$('#get_quote').click(getQuote);