function select<T extends HTMLElement>(
  html?: keyof HTMLElementTagNameMap,
  SelectAllElements?: "one" | "all"
) {
  let classOrId: string | null;
  const allElements = SelectAllElements === "all";
  let element: NodeListOf<T> | T | null;

  if (html) {
    element = allElements
      ? document.querySelectorAll<T>(html)
      : document.querySelector<T>(html);
    return element;
  }

  const where = function (classOrId: "id" | "class") {
    classOrId;
    return { equals };
  };

  const equals = function (
    classOrIdValue: string,
    allElements?: "one" | "all"
  ) {
    if (allElements) {
      element = document.querySelectorAll<T>(
        `${classOrId === "class" ? `.${classOrIdValue}` : `#${classOrIdValue}`}`
      );

      return element;
    } else {
      element = document.querySelector<T>(
        `${classOrId === "class" ? `.${classOrIdValue}` : `#${classOrIdValue}`}`
      );

      return element;
    }
    return { eventListener }; // fazer isso funcionar
  };

  const eventListener = function () {};

  return { where };
}

const teste = select<HTMLDivElement>("div", "all");

if (teste) {
  teste.forEach((it) => (it.innerHTML = "adwadaw"));
}
console.log({ teste });
