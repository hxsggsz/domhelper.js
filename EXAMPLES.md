## getting one element by id

```js
const testID = new Select().where("id").equals("test-inline").getResult()

if(testID) {
	testID.innerHTML = 'worked inline'
}
```

## getting element by html

```js
const getHtml = new Select("h1").getResult()
if(getHtml) {
	getHtml.innerHTML = "getting html"
}
```

## adding event listener

```js
const button = new Select("button").getResult()
if(button) {
	button.addEventListener("click", () => alert("clicked!"))
}
```

## getting multiples elements

```js
const testMultiple = new Select()
  .where("class")
  .equals("test-multiple-elements")
  .getAllResults()

if (testMultiple) {
  testMultiple.forEach(item => item.innerHTML = "worked multiple")
}
```

