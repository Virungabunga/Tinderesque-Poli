const apiUrl =
  "https://data.riksdagen.se/personlista/?iid=&fnamn=&enamn=&f_ar=&kn=&parti=&valkrets=&rdlstatus=&org=&utformat=json&sort=parti&sortorder=desc&termlista=";

const dataButton = document.getElementById("data");
const dislikeButton = document.getElementById("nope");
const likeButton = document.getElementById("like");
let ledamot = {};
let partiCounterArray = { S: 0, SD: 0, M: 0, V: 0, C: 0, KD: 0, MP: 0, L: 0 };
let parti = {};

const getData = async () => {
  const response = await fetch(apiUrl);
  console.log("response", response);

  data = await response.json();
  console.log("got data", data);

  return await data.personlista.person;
};

const main = async () => {
  likeButton.addEventListener("click", like);
  dislikeButton.addEventListener("click,", nope);

  //hämtar array med alla data på ledamoter
  ledamoter = await getData();

  //returnerar och tar bort en ledamot  från array

  let currentLedamot = ledamoter.shift();

  // sätter nuvarnde parti variabel
  parti = currentLedamot.parti;
  console.log(parti);

  displayData(currentLedamot);
};

const nope = () => {};

const like = () => {
  console.log(partiCounterArray.value);

  counter(parti, partiCounterArray);
  //kollar om man likat nåt part fem gånger

  for (let value of Object.values(partiCounterArray)) {
    if ((value) => 5) {
       
    }
  }
};

const counter = (parti, partiCounterArray) => {
  switch (parti) {
    case "S":
      partiCounterArray["S"] = +1;

      break;

    case "SD":
      partiCounterArray["SD"] = +1;

      break;

    case "M":
      partiCounterArray["M"] = +1;

      break;

    case "V":
      partiCounterArray["V"] = +1;

      break;

    case "C":
      partiCounterArray["C"] = +1;

      break;

    case "KD":
      partiCounterArray["KD"] = +1;

      break;
    case "MP":
      partiCounterArray["MP"] = +1;

      break;
    case "L":
      partiCounterArray["L"] = +1;

      break;
      break;
    default:
      console.log(partiCounterArray);
  }
};

const shuffle = (ledamoter) => {
  return ledamoter.sort(() => 0.5 - Math.random());
};

const displayData = (currentLedamot) => {
  currentLedamotAge = 2023 - currentLedamot.fodd_ar;
  document.getElementById("profileImg").src = currentLedamot.bild_url_192;
  document.getElementById("name").innerHTML = currentLedamot.tilltalsnamn;
  document.getElementById("age").innerHTML =
    currentLedamotAge + " år  - " + currentLedamot.status;
  document.getElementById("from").innerHTML = currentLedamot.valkrets;
};

main();
