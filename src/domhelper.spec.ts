import { Select } from "./domhelper";

let uniqueQuerySelectorMock: jest.SpyInstance<
  Element | null,
  [selectors: string],
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  any
>;

let multipleQuerySelectorMock: jest.SpyInstance<
  NodeListOf<Element>,
  [selectors: string],
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  any
>;

describe("new Select()", () => {
  beforeEach(() => {
    uniqueQuerySelectorMock = jest.spyOn(document, "querySelector");
    multipleQuerySelectorMock = jest.spyOn(document, "querySelectorAll");
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('when call "getResult()"', () => {
    test("calls the querySelector function", () => {
      new Select<HTMLDivElement>().where("class").equals("jest").getResult();

      expect(uniqueQuerySelectorMock).toHaveBeenCalled();
    });
  });

  describe('when call "getAllResults()"', () => {
    test("calls the querySelector function", () => {
      new Select<HTMLDivElement>()
        .where("class")
        .equals("jest")
        .getAllResults();

      expect(multipleQuerySelectorMock).toHaveBeenCalled();
    });
  });
});
