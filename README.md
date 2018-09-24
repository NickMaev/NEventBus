[![npm version](https://img.shields.io/npm/v/neventbus.svg?style=flat-square)](https://www.npmjs.com/package/neventbus)
[![npm downloads](https://img.shields.io/npm/dm/neventbus.svg?style=flat-square)](https://www.npmjs.com/package/neventbus)

# Description
NEventBus is a Vanilla JS event bus with async call support.

# Usage

## Install
`npm install neventbus`

## Prepare and usage
Import:
```typescript
import {NEventBus} from "neventbus";
```
or use the scripts tag (bundle):
```html
<script src="neventbus.min.js"></script>
```
Then:
(TypeScript)
```typescript        
NEventBus.subscribe("event1", this, (args) => {
	alert(args);
}); // "this" <-- Object which will be subscribed.
```
(JavaScript, using scripts tag)
```javascript
NEventBus.NEventBus.subscribe("event1", this, function(args) {
	alert(args);
}); // In JS bundle NEventBus.* required, because of UMD library!
```
Fire event:
(TypeScript)
```typescript
NEventBus.fire("event1", args);
```
(JS from bundle)
```javascript
NEventBus.NEventBus.fire("event1", args);
```
Unsubscribe:
(TypeScript)
```typescript
NEventBus.unsubscribe("event1", this); // "this" <-- Object which was subscribed.
```
(JS from bundle)
```javascript
NEventBus.NEventBus.unsubscribe("event1", this);
```

## Async call support
Define the event:
```typescript        
NEventBus.subscribe("asyncEvent1", this, 
	async (arg) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                    console.log("Executed: " + arg);
                    resolve();
                },
                2000);
        });
    }); // "this" <-- Object which will be subscribed.
```
Fire async event:
```typescript
await NEventBus.fireAsync("asyncEvent1", args);
```
