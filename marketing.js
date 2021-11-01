// THE DEMO THAT CALCULATES CONVERSION RATE

function conversionRate() {
    const conVersion = document.getElementById("conVersions").value;
    const numberClicks = document.getElementById("numberClicks").value;
    const convertRate = conVersion / numberClicks * 100;
    document.getElementById("convertRate").value = `${Math.round(convertRate)}%`;
}

// THE DEMO THAT CALCULATES EFFECTIVE COST PER MILLE

function effCost(){
    const totalEarnings = document.getElementById("totalEarning").value;
    const imPressions = document.getElementById("imPressions").value;
    const ecPm = totalEarnings / imPressions * 1000;
    document.getElementById("ecPm").value = `$${ecPm.toFixed(2)}`;
}