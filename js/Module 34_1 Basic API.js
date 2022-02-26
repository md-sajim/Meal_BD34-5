const kanyeQuots = () => {
  fetch("https://api.kanye.rest/")
    .then((res) => res.json())
    .then((data) => displayKany(data));
};

const displayKany = (kanyeData) => {
  const blockQuot = document.getElementById("blockQuot");
  blockQuot.innerText = kanyeData.quote;
};
