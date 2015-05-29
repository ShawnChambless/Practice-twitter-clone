$(function() {

    $('#tweet-submit').hide().prop('disabled', true);
    $('#char-count').hide();

    $('#tweet-content textarea').focus(function() {
        $('#tweet-submit').show();
        $('#char-count').show();
        $(this).height($(this).height() * 2);
    });

    $('#tweet-controls').click(function() {
        var tweet = $('.tweet:first').clone();
        tweet.find('.avatar').prop('src', 'img/damenleeturks.jpg');
        tweet.find('.fullname').html('Shawn Chambless');
        tweet.find('.username').html('@SMC');
        tweet.find('.tweet-text').html($('#tweet-content textarea').val());
        $('#stream').prepend(tweet);
        $('#tweet-content textarea').val('');
        $('#tweet-submit').hide().prop('disabled', true);
        $('#char-count').hide();
        $('#tweet-content textarea').css('height', '2.5em');
    });


    $('#tweet-content textarea').keydown(function() {
        var remaining = 140 - $('#tweet-content textarea').val().length;
        $('#char-count').html(remaining);

        if (remaining <= 10) {
            $('#char-count').css('color', '#d40d12');
        }
        else {
            $('#char-count').css('color', 'inherit');
        }

        if (remaining > 0 && remaining < 140){
            $('#tweet-controls button').prop('disabled', false);
        }

        else if (remaining <= 0) {
            $('#tweet-controls button').prop('disabled', true);
        }
    });









});
