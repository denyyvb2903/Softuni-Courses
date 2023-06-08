function solve() {

  const camelCase = "Camel Case";
  const pascalCase = "Pascal Case";

  const input = document
    .getElementById("text")
    .value.toLowerCase();

  const currentCase = document
    .getElementById("naming-convention")
    .value

  const result = document
    .getElementById("result");

  if (currentCase !== camelCase && currentCase !== pascalCase) {
    result.textContent = "Error!";
    return;
  }

  const arrfStr = input.split(" ");
  let out = "";
  let startingPoint = 0;

  if (currentCase === camelCase) {
    out += arrfStr[0];
    startingPoint = 1;
  }

  for (let i = startingPoint; i < arrfStr.length; i++) {
    const currentWord = arrfStr[i];
    out += currentWord[0].toUpperCase() + currentWord.slice(1, currentWord.length);

    result.textContent = out;
  }
}