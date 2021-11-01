//beta version
//ALL TOWS MATRIX DIVS

const str_opp = document.getElementById("so");
const str_threat = document.getElementById("st");
const weak_opp = document.getElementById("wo");
const weak_threat = document.getElementById("wt");

//ALL BUTTON VARIABLES

//these buttons, when clicked will generate content on their respective divs (#so, #st, #wo, #wt)

const soBtn = document.getElementById("soBtn");
const woBtn = document.getElementById("woBtn");
const stBtn = document.getElementById("stBtn");
const wtBtn = document.getElementById("wtBtn");

//ALL FORMS
const form1 = document.getElementById("form1");
const form2 = document.getElementById("form2");
const form3 = document.getElementById("form3");
const form4 = document.getElementById("form4");

//THEIR INPUTS
const element1 = document.form1.getElementsByTagName("input");
const element2 = document.form2.getElementsByTagName("input");
const element3 = document.form3.getElementsByTagName("input");
const element4 = document.form4.getElementsByTagName("input");


//S-O, W-O, S-T, W-T shared event listeners (RELATING THE INPUT OUTCOMES IN A MATRIX)
//Show the order of input on a div in HTML file.

function soStrategies() { //SO QUADRANT
  const soDiv = document.createElement("div");
  soDiv.id = "soDivs";
  for (let i = 0; i < element1.length; i++) {
    for (let j = 0; j < element3.length; j++) {
      element3[j].addEventListener("change", () => {
        element1[i].addEventListener("change", () => {
          soBtn.addEventListener("click", (e) => {
            e.preventDefault();

            if (
              element1[i].value.match(/james/gi) &&
              element3[j].value.match(/john/gi)
            ) {
              soDiv.style.display = "block";
              soDiv.innerHTML = `<ul><li>James and John were entered</li></ul>`;
              str_opp.appendChild(soDiv);
            } else {
              alert("Please Enter James and John");
            }
          });
        });
      });
    }
  }
}

soStrategies();

function woStrategies() { //WO QUADRANT
  const woDiv = document.createElement("div");
  woDiv.id = "woDiv";
  for (let i = 0; i < element2.length; i++) {
    for (let j = 0; j < element3.length; j++) {
      element3[j].addEventListener("change", () => {
        element2[i].addEventListener("change", () => {
          woBtn.addEventListener("click", (e) => {
            e.preventDefault();
            if (
              element2[i].value.match(/grace/gi) &&
              element3[j].value.match(/andrew/gi)
            ) {
              woDiv.style.display = "block";
              woDiv.innerHTML = `<ul><li>Grace and Andrew were added.</li></ul>`;
              weak_opp.appendChild(woDiv);
            } else {
              alert("Please enter Grace and Andrew");
            }
          });
        });
      });
    }
  }
}

woStrategies();

function stStrategies() { //ST QUADRANT
  const stDiv = document.createElement("div");
  stDiv.id = "stDiv";
  for (let i = 0; i < element1.length; i++) {
    for (let j = 0; j < element4.length; j++) {
      element4[j].addEventListener("change", () => {
        element1[i].addEventListener("change", () => {
          stBtn.addEventListener("click", (e) => {
            e.preventDefault();
            if (
              element1[i].value.match(/mary/gi) &&
              element4[j].value.match(/paul/gi)
            ) {
              stDiv.style.display = "block";
              stDiv.innerHTML = `<ul><li>Paul and Mary were entered</li></ul>`;
              str_threat.appendChild(stDiv);
            } else {
              alert("Please enter Paul and Mary");
            }
          });
        });
      });
    }
  }
}

stStrategies();

function wtStrategies() { //WT QUADRANT
  const wtDiv = document.createElement("div");
  wtDiv.id = "wtDiv";
  for (let i = 0; i < element2.length; i++) {
    for (let j = 0; j < element4.length; j++) {
      element4[j].addEventListener("change", () => {
        element2[i].addEventListener("change", () => {
          wtBtn.addEventListener("click", (e) => {
            e.preventDefault();
            if (
              element2[i].value.match(/susan/gi) &&
              element4[j].value.match(/peter/gi)
            ) {
              wtDiv.style.display = "block";
              wtDiv.innerHTML = `<ul><li>Susan and Peter were added</li></ul>`;
              weak_threat.appendChild(wtDiv);
            } else {
              alert("Please enter Susan and Peter");
            }
          });
        });
      });
    }
  }
}

wtStrategies();
