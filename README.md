# emjs

```
    const emjs = require('emjs');

    let myhtml = "<h1>Welcome to {{title}}</h1> <span>{{description}}</span> <span>I know {{langs.length}} languages!</span>";

    let emjshtml = emjs(myhtml,[{name:'title',value:'EMEJS'},{name:'description',value:'The best template engine'},{name:'langs',value:["c++","javascript","html","css","node.js"]}]);

    console.log(emjshtml);

    //<h1>Welcome to EMJS</h1> <span>The best template engine</span> <span>I know 5 languages!</span>
```
