function getQuote() {
  var both = $('#txt_name').val();
  $.getJSON('https://api.icndb.com/jokes/random?firstName=' + first + '&lastName=' + last, function(data) {
    $('#quote').html(data.value.joke);
    console.log("blah");
  });
};
console.log("stuff");
var first = 'David';
var last = 'Gaynor';
getQuote();
$('#get_quote').click(getQuote);