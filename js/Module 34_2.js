const randomFrind = () => {
  fetch("https://randomuser.me/api/?results=5")
    .then((res) => res.json())
    .then((data) => displayFrinds(data));
};

const displayFrinds = (fridnData) => {
  const divcontainer = document.getElementById("divId");
  console.log(fridnData.results);
  for (const friend of fridnData.results) {
    const p = document.createElement("p");
    p.innerText = `Name:${friend.name.title} ${friend.name.first} ${friend.name.last}
    Email:${friend.email}
    Gender:${friend.gender}`;
    divcontainer.appendChild(p);
  }
};
