import { ElementType } from "./domhelper.types";

export class Select<T extends HTMLElement> {
  private classOrId: string;
  private valueToGet: string;
  private element: ElementType<T>;

  constructor(html?: keyof HTMLElementTagNameMap) {
    this.element = null;
    this.classOrId = "";
    this.valueToGet = html ?? "";
  }

  where(classOrId: "id" | "class"): this {
    this.classOrId = `${classOrId === "class" ? "." : "#"}`;
    return this;
  }

  equals(valueToGet: string): this {
    this.valueToGet = `${this.classOrId}${valueToGet}`;
    return this;
  }

  getResult(): T {
    this.element = document.querySelector<T>(this.valueToGet);
    return this.element as T;
  }

  getAllResults(): NodeListOf<T> {
    this.element = document.querySelectorAll<T>(this.valueToGet);
    return this.element as NodeListOf<T>;
  }
}
