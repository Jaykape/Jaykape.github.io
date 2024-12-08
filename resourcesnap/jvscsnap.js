$(document).ready(function () {
    // Hide all content initially
    $('.ddbox').hide();

    // Utility function to handle visibility toggling
    function toggleSection(buttonClass, sectionId) {
        $(buttonClass).click(function (e) {
            e.preventDefault();
            
            // Hide all sections first
            $('.ddbox').hide().attr('aria-expanded', 'false');
            
            // Toggle visibility of the selected section
            $(sectionId).fadeToggle().attr('aria-expanded', function (_, attr) {
                return attr === 'true' ? 'false' : 'true';
            });
        });
    }

    // Assign toggle functionality to each button
    toggleSection('.botproj', '#divproj');
    toggleSection('.botover', '#divover');
    toggleSection('.botcont', '#divcont');
    toggleSection('.botetc', '#divetc');
});












































$(document).ready(function () {
    // Hide all content initially
    $('.slideshow-container').hide();

    // Utility function to handle visibility toggling
    function toggleShow(buttonClass, sectionId) {
        $(buttonClass).click(function (e) {
            e.preventDefault();
            
            // Hide all sections first
            $('.slideshow-container').hide().attr('aria-expanded', 'false');
            
            // Toggle visibility of the selected section
            $(sectionId).fadeToggle().attr('aria-expanded', function (_, attr) {
                return attr === 'true' ? 'false' : 'true';
            });
        });
    }

    // Assign toggle functionality to each button
    toggleShow('.botrandom', '#randomshow');
  
});

function closeSlideshow() {
    $('#randomshow').fadeOut(); // Hides the slideshow container
}
























