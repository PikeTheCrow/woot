var Horseman = require('node-horseman');
var horseman = new Horseman({
    injectQuery:    true
});

horseman
  .open('http://www.ign.com')
  .click('a[class=" filter"]')
  .wait(1500)
  .text('span[class="livefyre-commentcount"]')
  .click('a[class="listElmnt-storyHeadline"]')
  .wait(1500)
  .includeJs('https://cdn.livefyre.com/Livefyre.js')
  .wait(5000)
  .count('article[class="fyre-comment-article fyre-comment-source-5"]')
  .then(function(numComments){
      console.log("This is the title:" +numComments)
  })
  .close();
