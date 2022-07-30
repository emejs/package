# EMEJS

```js
const emejs = require('emejs');

//direct code

let myhtml = "<h1>Welcome to {{=title}}</h1> <span>{{=description}}</span> <span>I know {{=langs.length}} languages!</span> <span> Random code: {{Math.random()}} </span>";

let emjshtml = emejs.compile(myhtml,[{name:'title',value:'EMEJS'},{name:'description',value:'The best template engine'},{name:'langs',value:["c++","javascript","html","css","node.js"]}]);

console.log(emjshtml);

//direct file

(async() => {
    let emjshtmlfile = await emejs.compilefile("test.eme",[{name:'title',value:'EMEJS'},{name:'description',value:'The best template engine'},{name:'langs',value:["c++","javascript","html","css","node.js"]}]);

    console.log(emjshtmlfile);
})()
```
