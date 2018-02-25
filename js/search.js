$(document).ready(function() {
    $('.content .search_btn').on('click',function (e) {
        if ($(this).prev().val() != "")
            $(this).parent().submit();
        else
            $(this).prev().focus();
    });
    $('.content .clear_btn').on('click', function () {
        $(this).next().val("");
    });
    //adds search key to the search field
    $('#search_key').next().children('input').val($('#search_key').text());
});