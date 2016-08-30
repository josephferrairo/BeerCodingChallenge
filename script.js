var delay = (function(){
  var timer = 0;
  return function(callback, ms){
    clearTimeout (timer);
    timer = setTimeout(callback, ms);
  };
})();

$('#search').keyup(function() {
  delay(function(){
    alert('Results Loaded');
  }, 0 );
  var searchField = $('#search').val();
  //Search using RegExp
  var myExp = new RegExp(searchField, "i");
  // Url for JSON Data
  var beer = "https://data.cityofboston.gov/resource/ntv7-hwjm.json"
  // Get JSON data
  $.getJSON(beer, function(data) {

    var output = '<ul class="searchresults">';
    var earnings = []
    total_earnings_avg_arr = []
    $.each(data, function(key, val) {

      //console.log(earnings)
      //If the search finds a match, output that match

      if (val.title.search(myExp) != -1) {

        //put total_earnings into an array called earnings
        earnings.push(val.total_earnings);
        //change earnings from a string to a number
        earnings = earnings.map(Number);
        //make a variable for the total amount of earnings
        var earnings_length = earnings.length;
        //bulid the sum of the earnings
        var earnings_sum = earnings.reduce(function(a,b) { return a + b;},0);
        var total_earnings_avg = (earnings_sum / earnings_length);
        //modify earnings to only have 2 decimal places
        var total_earnings_avg = total_earnings_avg.toFixed(2)
        console.log(total_earnings_avg)


      }

    });

    output += '</ul>';
    $('#update').html(output);


  });

});
