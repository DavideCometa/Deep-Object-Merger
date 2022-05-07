# Deep Object Merger 

Deep merge 1 or more objects over a target.
Keys that are not in common with sources will remain unchanged in the target.
All the keys from sources not present in target will be merged (so added to the target object)
You can add as many sources object as you want but the first object passed will be the target.

# Usage example:

```js
var deepMerge = require('deep-object-merger')
```

Let's suppose we have 3 complex JSON objects and we want to merge userData2 and userData3 over userData1:
```js
let userData1 = {
	"id": 213827,
	"data" : {
		"username": "testUser1",
		"subscriptionDate": "01-02-2022",
		"address" : {
			"country": "Italy"
		}
	},
	"someArrayProperties": [2,412,12,3,2]
}

let userData2 = {
	"id": 213827,
	"data" : {
		"username": "testUser2",
		"email": "newEmail@gmail.com",
		"address" : {
			"country": "Italy",
			"street": "Example street",
		}
	},
	"someArrayProperties": [2,412,12,3,2,657]
}

let userData3 = {
	"id": 213827,
	"dummyContent": ["Just", "Dummy", "Content"]
}



//calling

var mergeResult = deepMerge(userData1, userData2, userData3) 
console.log(mergeResult);
	
//DeepMerge will produce a result like this:

{
  id: 213827,
  data: {
    username: 'testUser2',
    subscriptionDate: '01-02-2022',
    address: { country: 'Italy', street: 'Example street' },
    email: 'newEmail@gmail.com'
  },
  someArrayProperties: [ 2, 412, 12, 3, 2, 657 ],
  dummyContent: [ 'Just', 'Dummy', 'Content' ]
}

```


