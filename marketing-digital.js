//AN APP THAT CALCULATES CLICK-THROUGH RATE

function clickThrough() {
    const numberClicks = document.getElementById("numberClicks").value;
    const numberViews = document.getElementById("numberViews").value;
    const ctr = numberClicks / numberViews * 100;
    document.getElementById('rateClick').value = `${Math.round(ctr)}%`;
}


//AN APP THAT CALCULATES COST PER MILLE
function cpm() {
    const adCost = document.getElementById("advertCost").value;
    const cpmViews = document.getElementById("cpmViews").value;
    const costperMille = adCost / cpmViews * 1000;
    document.getElementById("costperMille").value = `$${costperMille.toFixed(2)}`;
}


//AN APP THAT CALCULATES COST PER CLICK

function costperClick() {
    const costAdvertiser = document.getElementById("costAdvertiser").value;
    const clickNumber = document.getElementById("clickNumber").value;
    const costMille = costAdvertiser / clickNumber;
    document.getElementById("costMille").value = `$${costMille.toFixed(2)}`;
}


//AN APP THAT CALCULATES CONVERSION RATE

function conversionRate() {
    const numberConversion = document.getElementById("numberConversion").value;
    const clickNumber2 = document.getElementById("clickNumber2").value;
    const rateConversion = numberConversion / clickNumber2 * 100;
    document.getElementById("rateConversion").value = `${Math.round(rateConversion)}%`;
}


//AN APP THAT CALCULATES COST PER ACQUISITION

function cpAquisition() {
    const adcostCpa = document.getElementById("adcostCpa").value;
    const conversionsCpa = document.getElementById("conversionsCpa").value;
    const cpa = adcostCpa / conversionsCpa;
    document.getElementById("cpa").value = `$${cpa.toFixed(2)}`;
}


//AN APP THAT CALCULATES COST PER LEAD

function cpLead() {
    const adcostCpl = document.getElementById("adcostCpl").value;
    const leadsCpl = document.getElementById("leadsCpl").value;
    const costPerlead = adcostCpl / leadsCpl * 1000;
    document.getElementById("costPerlead").value = `$${costPerlead.toFixed(2)}`;
}

//AN APP THAT CALCULATES EFFECTIVE COST PER MILLE

function ecpm() {
    const totalEarning = document.getElementById("totalEarning").value;
    const imPressions = document.getElementById("imPressions").value;
    const effCost = totalEarning / imPressions * 1000;
    document.getElementById("effCost").value = `$${effCost.toFixed(2)}`;
}

//AN APP THAT CALCULATES EFFECTIVE COST PER CLICK

function ecpc() {
    const ecpcEarning = document.getElementById("ecpcEarning").value;
    const totalActions = document.getElementById("totalActions").value;
    const effCPC = ecpcEarning / totalActions;
    document.getElementById("effCPC").value = `$${effCPC.toFixed(2)}`;
}

//AN APP THAT CALCULATES RETURN ON INVESTMENT

function roi() {
    const totalRevenue = document.getElementById("totalRevenue").value;
    const totalCost = document.getElementById("totalCost").value;
    const roInvestment = [(totalRevenue - totalCost) / totalCost] * 100;
    document.getElementById("roInvestment").value = `${Math.round(roInvestment)}%`;
}

//AN APP THAT CALCULATES RETURN ON ADVERT SPEND

function roas() {
    const revenue = document.getElementById("roasRevenue").value;
    const spend = document.getElementById("totalSpend").value;
    const roasSpend = revenue / spend;
    document.getElementById("roasSpend").value = `$${roasSpend.toFixed(2)}`;
}


//AN APP THAT CALCULATES BOUNCED RATE

function bounceRate() {
    const bounced = document.getElementById("bouncedSessions").value;
    const sessions = document.getElementById("totalSessions").value;
    const rateBounced = bounced / sessions * 100;
    document.getElementById("rateBounced").value = `${Math.round(rateBounced)}%`;
}
