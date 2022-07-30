# EMEJS

```js
const emejs = require('emejs');

let myhtml = "<h1>Welcome to {{=title}}</h1> <span>{{=description}}</span> <span>I know {{=langs.length}} languages!</span> <span> Random code: {{Math.random()}} </span>";

let emjshtml = emejs(myhtml,[{name:'title',value:'EMEJS'},{name:'description',value:'The best template engine'},{name:'langs',value:["c++","javascript","html","css","node.js"]}]);

//<h1>Welcome to EMEJS</h1> <span>The best template engine</span> <span>I know 5 languages!</span> <span> Random code: 0.06345959932096235 </span>
console.log(emjshtml);
```
