$(function () {

  // $.getJSON( "//www.kimonolabs.com/api/42tbt3m0?apikey=GYMKOJ7U9cdnoSw2ZMxxWmWJevyCp6AK", function( data ) {
  //
  //   // Write the data into our global variable.
  //   products = data;
  //
  //   // Call a function to create HTML for all the products.
  //   generateAllProductsHTML(products);
  //
  //   // Manually trigger a hashchange to start the app.
  //   $(window).trigger('hashchange');
  // });


  var url = 'https://www.kimonolabs.com/api/42tbt3m0?callback=?';

  $.ajax({
     type: 'GET',
      url: url,
      crossDomain: true,
      apikey: 'GYMKOJ7U9cdnoSw2ZMxxWmWJevyCp6AK',
      async: false,
      jsonpCallback: 'callback',
      contentType: "application/json",
      dataType: 'jsonp',
      success: function(json) {
         console.log(json.results);
      },
      error: function(e) {
         console.log(e.message);
      }
  });

});
