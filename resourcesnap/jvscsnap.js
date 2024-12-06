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
    toggleSection('.botproj', '#divnetwork');
    toggleSection('.botover', '#divcloud');
    toggleSection('.botcont', '#divdata');
    toggleSection('.botetc', '#divetc');
});
