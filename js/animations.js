$(function() {

    $('#tweet-submit').hide();
    $('#char-count').hide();

    $('#tweet-content textarea').focus(function() {
        $('#tweet-submit').show();
        $('#char-count').show();
        $(this).height($(this).height() * 2);

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
            $('#tweet-controls button').click(function() {
                $('.tweet:first-child').prepend('<div class = "tweet"><div class = "content"><image class = "avatar" src = "img/damenleeturks.jpg"></image><strong class="fullname">My BFF</strong><span class="username">@mybff</span></div></div>');
            });
        }

        else if (remaining <= 0) {
            $('#tweet-controls button').prop('disabled', true);
        }

    });









});
