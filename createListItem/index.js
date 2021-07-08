const list = document.getElementById("band-list");
const myBandArray = ["Dire Straits", "Kansas", "Steely Dan"];

const addBandList = (arr) => {
  return arr.map((el) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = el;
    list.appendChild(listItem);
  });
};

addBandList(myBandArray);
