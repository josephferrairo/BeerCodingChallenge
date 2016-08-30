$.getJSON('https://data.cityofboston.gov/resource/ntv7-hwjm.json', function(data) {
  var output = '<ul>';
  $.each(data, function(key, val) {
      output += '<li>' + val.title + ', ' + val.total_earnings + '</li>';
  });
  output +='</ul>'
  $('#update').html(output);
})
