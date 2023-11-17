const testMultiple = new Select()
  .where("class")
  .equals("test-multiple-elements")
  .getAllResults()

if (testMultiple) {
  testMultiple.forEach(item => item.innerHTML = "worked multiple")
}