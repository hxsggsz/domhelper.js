const testClass = new Select()
  .where("class")
  .equals("test-import")
  .getResult()
  
if(testClass) {
  testClass.innerHTML = 'worked import'
}