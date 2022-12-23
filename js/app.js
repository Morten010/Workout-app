$(function() {

    $(document).on('click', '.exercise-accordion', function() {
        $(this).toggleClass('open');
    });

    $(document).on('click', '#about', function() {
        $('#info-activator').toggleClass('open')
        console.log('clicked');
    });
});