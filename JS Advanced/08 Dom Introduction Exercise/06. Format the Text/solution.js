function solve() {

  const textArea = document.getElementById("input");
  const textAreaValue = textArea.value;
  const resulutDiv = document.getElementById("output")

  const sentencesArr = textAreaValue
    .split(".")
    .filter((s) => s !== "")
    .map((s) => s + ".");

  const pRoof = Math.ceil(sentencesArr.length / 3);

  for (let i = 0; i < pRoof; i++) {
    const joinedSentences = sentencesArr
      .splice(0, 3)
      .join("");
    resulutDiv.innerHTML += `<p>${joinedSentences}</p>`;
  }
}