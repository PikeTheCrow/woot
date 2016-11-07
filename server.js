var Horseman = require('node-horseman');
var horseman = new Horseman({
    injectQuery:    true
});

horseman
  .open('http://www.ign.com/videos/2016/11/06/one-of-the-best-genji-cosplayers-at-blizzcon-2016-ign-access')
  .wait(16000)
  .text('article[class="fyre-comment-article fyre-comment-source-5"]')
  .then(function(numHeaders){
	console.log("Number of headers: " +numHeaders);
	horseman.close();
});
