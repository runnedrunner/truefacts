function getQuote() {
  var first = $('#first').val();
  console.log()
  var last = $('#last').val();
  $.getJSON('https://api.icndb.com/jokes/random?firstName=' + first + '&lastName=' + last, function(data) {
    $('#quote').html(data.value.joke);
    console.log("blah");
  });
};
console.log("stuff");
getQuote();
$('#get_quote').click(getQuote);