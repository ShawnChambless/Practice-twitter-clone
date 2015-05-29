$(function() {

    $('#tweet-submit').hide();
    $('#char-count').hide();


    $('#tweet-content textarea').click(function(e) {
        e.preventDefault();
        $('#tweet-submit').show();
        $('#char-count').show();

    });





});
