const testMultiple = new Select()
  .where("class")
  .equals("test-multiple-elements")
  .all()
  .getAllResults()

  if (testMultiple) {
  testMultiple.forEach(item => item.innerHTML = "multiple worked")
}