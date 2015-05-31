$(function() {
    $('#tweet-submit, #char-count, .tweet-actions, .stats, .reply').hide();
    $('#tweet-submit').prop('disabled', true);

    $('.tweet').mouseenter(function() {
        $(this).find($('.tweet-actions')).fadeIn(100, 'linear');
    });

    $('.tweet').mouseleave(function() {
        $('.tweet-actions').fadeOut(20, 'linear');
    });

    $('#tweet-content').focusin(function() {
        $('#tweet-submit').show();
        $('#char-count').show();
        $('#tweet-content textarea').css('height', '5em').css('max-height', '5em');
    });
    $('#tweet-content textarea').focusout(function() {
        $(this).css('height', '2.5em');
    });

    $('#tweet-controls').click(function() {
        var tweet = $('.tweet:first').clone();
        tweet.find('.avatar').prop('src', 'img/damenleeturks.jpg');
        tweet.find('.fullname').html('Shawn Chambless');
        tweet.find('.username').html('@SMC');
        tweet.find('.tweet-text').html($('#tweet-content textarea').val());
        $('#stream').prepend(tweet);
        $('#tweet-content textarea').val('').css('height', '2.5em');
        $('#tweet-submit').hide().prop('disabled', true);
        $('#char-count').hide();
        $('.tweet-actions').fadeOut(20, 'linear');
        $('.tweet').mouseenter(function() {
            $(this).find($('.tweet-actions')).fadeIn(100, 'linear');
        });
        $('.tweet').mouseleave(function() {
            $('.tweet-actions').hide();
        });
        $('.tweet').click(function() {
            $(this).find($('.reply, .stats')).fadeIn(100, 'linear');
        });

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

    $('.tweet').click(function() {
        $(this).find($('.reply, .stats')).fadeIn(100, 'linear');
    });



});
