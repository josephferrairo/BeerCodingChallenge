$('#search').keyup(function() {
  var searchField = $('#search').val();
  //Search using RegExp
  var myExp = new RegExp(searchField, "i");
  // Url for JSON Data
  var beer = "https://data.cityofboston.gov/resource/ntv7-hwjm.json"
  // Get JSON data
  $.getJSON(beer, function(data) {
    var output = '<ul class="searchresults">';
    var earnings = [];
    var total_earnings_avg=0;

    $.each(data, function(key, val) {
      //console.log(earnings)
      //If the search finds a match, output that match
      if (val.title.search(myExp) != -1) {
        //put total_earnings into an array called earnings
        earnings.push(val.total_earnings);
      }
    });
    //change earnings from a string to a number
    earnings = earnings.map(Number);
    //make a variable for the total amount of earnings
    var earnings_length = earnings.length;
    //bulid the sum of the earnings
    var earnings_sum = earnings.reduce(function(a,b) { return a + b;},0);
    //divide sum of earnings by the amount of people 'titles'
    total_earnings_avg = (earnings_sum / earnings_length);
    //modify earnings to only have 2 decimal places
    total_earnings_avg = total_earnings_avg.toFixed(2);
    console.log(total_earnings_avg);
    output += '<h2>' + '$' + total_earnings_avg + '</h2>'
    output += '<h3>' + searchField + '</h3>'
    $('#update').html(output);

    output += '</ul>';
  });

});
