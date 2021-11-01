//THIS APP GENERATES ALTERNATIVE STRATEGIES THROUGH THE USE OF KEYWORDS. IT IS LINKED WITH SWOT.JS

//Use regular expressions to generate startegies based on certain inputed keywords
//ALL INPUT VARIABLES

const strengthInput1 = document.getElementById("strengthInput1");
const strengthInput2 = document.getElementById("strengthInput2");
const strengthInput3 = document.getElementById("strengthInput3");
const strengthInput4 = document.getElementById("strengthInput4");
const strengthInput5 = document.getElementById("strengthInput5");

const weaknessInput1 = document.getElementById("weaknessInput1");
const weaknessInput2 = document.getElementById("weaknessInput2");
const weaknessInput3 = document.getElementById("weaknessInput3");
const weaknessInput4 = document.getElementById("weaknessInput4");
const weaknessInput5 = document.getElementById("weaknessInput5");

const opps1 = document.getElementById("opportunityInput1");
const opps2 = document.getElementById("opportunityInput2");
const opps3 = document.getElementById("opportunityInput3");
const opps4 = document.getElementById("opportunityInput4");
const opps5 = document.getElementById("opportunityInput5");

const threatInput1 = document.getElementById("threatInput1");
const threatInput2 = document.getElementById("threatInput2");
const threatInput3 = document.getElementById("threatInput3");
const threatInput4 = document.getElementById("threatInput4");
const threatInput5 = document.getElementById("threatInput5");

const arrStrength = [
  strengthInput1,
  strengthInput2,
  strengthInput3,
  strengthInput4,
  strengthInput5,
];
const arrWeakness = [
  weaknessInput1,
  weaknessInput2,
  weaknessInput3,
  weaknessInput4,
  weaknessInput5,
];
const arrOpps = [opps1, opps2, opps3, opps4, opps5];
const arrThreat = [
  threatInput1,
  threatInput2,
  threatInput3,
  threatInput4,
  threatInput5,
];

arrStrength.forEach(myStrength);
function myStrength(index) {
  return index.value;
}

arrOpps.forEach(myOpps);
function myOpps(index) {
  return index.value;
}

arrWeakness.forEach(myWeakness);
function myWeakness(index) {
  return index.value;
}

arrThreat.forEach(myThreat);
function myThreat(index) {
  return index.value;
}

function soStrategies(arrStrength){
    if(arrStrength.match(/high quality/gi) || (/good quality/gi) || (/great quality/) ||(/amazing quality/)){
return "Leverage high quality";
    } else if(arrStrength.match(/good services/gi) ||(/great services/gi) || (/quality services/gi )){
        return "Take advantage of good services";
    } else if(arrStrength.match(/new product/gi) ||(/many products/) || (/new solutions/gi) || (/new services/gi)){
        return "Sell new offerings";
    } else if(arrStrength.match(/product development/gi) || (/product creation/gi) || (/produce product/gi) || (/develop product/gi)){
        return 'Develop new products';
    }
}