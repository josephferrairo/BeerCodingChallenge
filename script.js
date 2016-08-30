$('#search').keyup(function() {
  var searchField = $('#search').val();
  //Search using RegExp
  var myExp = new RegExp(searchField, "i");
  // Get JSON data
    $.getJSON('https://data.cityofboston.gov/resource/ntv7-hwjm.json', function(data) {
        var output = '<ul class ="searchresults">';
        $.each(data, function(key, val) {
              //If the search finds a match, output that match
              if (val.title.search(myExp) != -1) {
              output += '<li>';
              output += '<h2>' + val.title + '</h2>';
              output += '<p>' + '$' + val.total_earnings + '</p>'
              output += '</li>'
            }
        });
        output += '</ul>';
        $('#update').html(output);
  });
});
