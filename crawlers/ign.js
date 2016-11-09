var Horseman = require('node-horseman');
var horseman = new Horseman({
    injectQuery:    true
});

/*
    DATA FLOW BEHAVIOUR:
    Navigate to site
    Return 200 success
    If success continue
    click on feed / latest articles
    Intitial scrap (midnight) - retrieve the following from articles:
        link
        image
        title
    ------------------------------------------------------------
    | id | epoch | title | image url | link | comments | likes |
    ------------------------------------------------------------
    Following scrap (4 hour intervals):
        Navigate to links within timeframe (> epoch+(24*60*60))
        includeJs(livefyre.js url)
        wait(10000)
        count comment divs / look for comment number - update db
        if there are likes (upvotes) - retrieve number - update to db§
        if title ne title - update db with any new articles
*/

horseman
    .open("http://www.ign.com")
    .wait(500)
    .click('a[class=" filter"]')
