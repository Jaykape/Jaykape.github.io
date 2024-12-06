$(document).ready(function() {
    // Hide all content initially
    $('.ddbox').hide();

    // Add click event for each button
    $('.botproj').click(function(e) {
      e.preventDefault();
      $('#divnetwork').fadeToggle(); // toggle visibility
      $('#divcloud, #divdata, #divetc').hide(); // hide other sections
    });

    $('.botover').click(function(e) {
      e.preventDefault();
      $('#divcloud').fadeToggle(); 
      $('#divnetwork, #divdata, #divetc').hide(); 
    });

    $('.botcont').click(function(e) {
      e.preventDefault();
      $('#divdata').fadeToggle(); 
      $('#divcloud, #divnetwork, #divetc').hide();
    });

    $('.botetc').click(function(e) {
      e.preventDefault();
      $('#divetc').fadeToggle(); 
      $('#divnetwork, #divdata, #divcloud').hide(); 
    });
  });