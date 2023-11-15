type AllElementsTypes = "one" | "all";
type ElementType<T extends HTMLElement> = NodeListOf<T> | T | null;

class Select<T extends HTMLElement> {
  private classOrId: string;
  private valueToGet: string;
  private allElements: AllElementsTypes;
  private element: ElementType<T>;

  constructor(
    html?: keyof HTMLElementTagNameMap,
    allElements?: AllElementsTypes
  ) {
    this.classOrId = "";
    this.allElements = allElements ?? "one";
    this.element =
      allElements === "one"
        ? document.querySelector<T>(html ?? "*")
        : document.querySelectorAll<T>(html ?? "*");
    this.valueToGet = "";
  }

  where(classOrId: "id" | "class"): this {
    this.classOrId = classOrId;
    return this;
  }

  equals(valueToGet: string) {
    this.valueToGet = valueToGet;
    this.element = document.querySelector<T>(
      `${this.classOrId === "class" ? `.${valueToGet}` : `#${valueToGet}`}`
    );

    return this;
  }

  all() {
    this.allElements = "all";
    this.element = document.querySelectorAll<T>(
      `${
        this.classOrId === "class"
          ? `.${this.valueToGet}`
          : `#${this.valueToGet}`
      }`
    );

    return this;
  }

  getResult() {
    console.log(this.element);
    return this.element as T;
  }

  getResults() {
    console.log(this.element);
    return this.element as NodeListOf<T>;
  }
}
