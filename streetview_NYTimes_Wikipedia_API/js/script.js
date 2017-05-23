
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    var streetStr = $('#street').val();
    var cityStr = $('#city').val();
    var address = streetStr + ', ' + cityStr;

    $greeting.text('So, you want to live at ' + address + '?');

    //Google Streetview request

    var streetviewUrl = 'https://maps.googleapis.com/maps/api/streetview?size=600x300&location=' + address;

    $body.append('<img class="bgimg" src="' + streetviewUrl + '">');

    //New York Times request

    var nyTimesUrl = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + cityStr + '&sort=newest&api-key=d43054867fa744498d567366319258cb';

    $.getJSON(nyTimesUrl, function(data) {

        $nytHeaderElem.text('New York Times articles about ' + cityStr);

        articles = data.response.docs;

        for (var i = 0; i < articles.length; i++) {

            var article = articles[i];

            $nytElem.append('<li class="article">'+'<a href="'+article.web_url+'">'+article.headline.main+'</a>'+'<p>'+article.snippet+'</p>'+'</li>');

        };

    }).fail(function(e) {

        $nytHeaderElem.text('New York Times Articles could not be loaded');

    });

    //Wikipedia request

    var wikiUrl = "http://en.wikipedia.org/w/api.php?action=opensearch&search=" + cityStr + "&format=json&callback=wikiCallback";

    var wikiRequestTimeout = setTimeout(function() {
        $wikiElem.text("Failed to get Wikipedia Resources");
    }, 8000);

    $.ajax({
        url: wikiUrl,
        dataType: 'jsonp',
        success: function(data) {

            var articleList = data[1];

            for (var i = 0; i < articleList.length; i++) {

                articleStr = articleList[i];

                var url = "http://en.wikipedia.org/wiki/" + articleStr;

                $wikiElem.append('<li><a href="' + url + '">' + articleStr + '</a></li>');

            };

            clearTimeout(wikiRequestTimeout);
        }
    });   

    return false;
};

$('#form-container').submit(loadData);
