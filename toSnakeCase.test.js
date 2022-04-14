const toSnakeCase = (lowerCamelCaseText) => {
  if (lowerCamelCaseText === "") {
    return "You must provide some text";
  }
  if (lowerCamelCaseText[0].toUpperCase() === lowerCamelCaseText[0]) {
    return "The text starts with a capital letter";
  }
  if (lowerCamelCaseText.includes("-")) {
    return "The text contains dashes";
  }
  if (lowerCamelCaseText.includes("_")) {
    return "The text contains underscores";
  }

  const regularExpression = /[A-Z]?[a-z]+|[0-9]+|[A-Z]+(?![a-z])/g;
  const separatedWordsArray = lowerCamelCaseText.match(regularExpression);
  return separatedWordsArray.join("_");
};

describe("Given toSnakeCase function", () => {
  describe("When it recieves the text 'holaMundo'", () => {
    test("Then it should return the text 'hola_Mundo", () => {
      const textLowerCamelCase = "holaMundo";
      const expectedText = "hola_Mundo";

      const textSnakeCase = toSnakeCase(textLowerCamelCase);

      expect(textSnakeCase).toBe(expectedText);
    });
  });

  describe("When it recieves nothing", () => {
    test("Then it should return the text 'You must provide some text", () => {
      const noTextProvided = "";
      const expectedMessage = "You must provide some text";

      const expectedTextResult = toSnakeCase(noTextProvided);

      expect(expectedTextResult).toBe(expectedMessage);
    });
  });

  describe("When it recieves the text 'Ahora'", () => {
    test("Then it should return the text 'The text starts with a capital letter", () => {
      const textStartsWithCapitalLetter = "Ahora";
      const expectedMessage = "The text starts with a capital letter";

      const expectedTestResult = toSnakeCase(textStartsWithCapitalLetter);

      expect(expectedTestResult).toBe(expectedMessage);
    });
  });

  describe("When it recieves the text 'ahora-Si'", () => {
    test("Then it should return the text 'The text contains dashes", () => {
      const textWithDashes = "ahora-Si";
      const expectedMessage = "The text contains dashes";

      const expectedTextResult = toSnakeCase(textWithDashes);

      expect(expectedTextResult).toBe(expectedMessage);
    });
  });
});
