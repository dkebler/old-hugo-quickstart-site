//Initial load of page
// For setting the topbar sticky 
$(document).ready(function(){
  $("#topbar").sticky({topSpacing:0});
  $("#topbar__sitename").text("Logo Hidden");
  });

//Every resize of window
$(window).resize();

$('#topbar').on('sticky-start', function() { 
  $("#topbar__sitename").text("Display Logo Now");
    });

$('#topbar').on('sticky-end', function() { 
$("#topbar__sitename").text("Logo Hidden");
    });
