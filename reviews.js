const Horseman = require('node-horseman');
const urls = ['http://www.ign.com', 'http://www.gamespot.com', 'http://www.gamefaqs.com', 'http://kotaku.com', 'http://n4g.com'];

urls.forEach((url) => {
    const horseman = new Horseman({
        injectJquery:   true
    });
    horseman
        .open(url)
        .title()
        .then((url) => {
        })
        .close();
});
