# domhelper.js

domhelper.js is a typescript and javascript library for dealing with DOM.

## Installation

use directly on HTML

```html
<script src="https://cdn.jsdelivr.net/npm/domhelper.js@latest/dist/domhelper.js"></script>
```

## Usage

```js
// HTML
<script src="https://cdn.jsdelivr.net/npm/domhelper.js@0.1.0/dist/domhelper.js"></script>

// js
const test = new Select().where("id").equals("test").getResult()
```

## Troubleshooting
if you face wit this error on console

[error on console reference error exports is not defined](https://i.imgur.com/3DC5XyI.png)

add this line as your first script on html

```js
<script>
  const exports = {}
</script>
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://github.com/hxsggsz/domhelper.js/blob/master/LICENSE)