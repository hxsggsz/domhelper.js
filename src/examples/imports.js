import { Select } from "../../dist/domhelper.mjs"
// documentar pra nao colocar ids ou classes com nomes separadas senao nao funciona e.g test import
const testClass = new Select()
  .where("class")
  .equals("test-import")
  .getResult()
  
if(testClass) {
  testClass.innerHTML = 'worked'
}