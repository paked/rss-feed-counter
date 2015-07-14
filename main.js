$(document).ready(function() {
    $("#go").click(function() {
        $.get($('#rss').val(), function(data) {
            var $xml = $(data);
            $xml.find("item").each(function(item) {
                console.log(item);
            });
        });
    });
});
