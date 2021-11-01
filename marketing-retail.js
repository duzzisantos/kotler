//AN APP THAT COMPUTES ACID TEST RATIO

function acidTest() {
    const assets = document.getElementById("currAssets").value;
    const inventory = document.getElementById("inventory").value;
    const liabilities = document.getElementById("liaBilities").value;
    const atr = [(assets - inventory) / liabilities];
    document.getElementById("atr").value = Math.round(atr);
}


//AN APP THAT COMPUTES AVERAGE INVENTORY

function avInventory() {
    const beginning = document.getElementById("beginning").value;
    const ending = document.getElementById("ending").value;
    const avInv = (+beginning + +ending) / 2;
    document.getElementById("avInv").value = `${Math.round(avInv)} units`;
}

//AN APP THAT COMPUTES BREAKEVEN PRICE

function breakEven() {
    const fixedCost = document.getElementById("fixedCost").value;
    const revenue = document.getElementById("revenue").value;
    const costGoods = document.getElementById("costGoods").value;
    const bep = fixedCost / (revenue - costGoods);
    document.getElementById("bep").value = `$${bep.toFixed(2)}`;
}

//AN APP THAT COMPUTES CONTRIBUTION MARGIN

function contribution() {
    const sellingPrice = document.getElementById("sellingPrice").value;
    const varCost = document.getElementById("varCost").value;
    const cMargin = sellingPrice - varCost;
    document.getElementById("cMargin").value = `$${cMargin}`;
    const cmr = (cMargin / sellingPrice) * 100;
    document.getElementById("cmr").value = `${Math.round(cmr)}%`;
}

//AN APP THAT COMPUTES GROSS MARGIN

function grossMargin() {
    const salesTotal = document.getElementById("salesTotal").value;
    const goodSold = document.getElementById("goodSold").value;
    const grMargin = salesTotal - goodSold;
    document.getElementById("grMargin").value = `$${grMargin}`;
    const gmr = (grMargin / salesTotal) * 100;
    document.getElementById("gmr").value = `${Math.round(gmr)}%`
}

//AN APP THAT COMPUTES GROSS MARGIN ROI

function grossROI() {
    const groMargin = document.getElementById("groMargin").value;
    const avInvcost = document.getElementById("avInvcost").value;
    const gmROI = groMargin / avInvcost;
    document.getElementById("gmROI").value = `$${gmROI.toFixed(2)}`;
}

//AN APP THAT COMPUTES INVENTORY TURNOVER

function invTurnover() {
    const netRevenue = document.getElementById("netRevenue").value;
    const avStock = document.getElementById("avStock").value;
    const turnOver = netRevenue / avStock;
    if(turnOver <= 1){
        document.getElementById("turnOver").value = `${Math.ceil(turnOver)} time`;
    } else if(turnOver > 1){
        document.getElementById("turnOver").value = `${Math.ceil(turnOver)} times`;
    }
}


//AN APP THAT COMPUTES NET REVENUE

function netSales() {
    const grossRevenue = document.getElementById("grossRevenue").value;
    const reTurns = document.getElementById("reTurns").value;
    const reFunds = document.getElementById("reFunds").value;
    const netRev = grossRevenue - reTurns - reFunds;
    document.getElementById("netRev").value = `$${netRev}`;
}


//AN APP THAT CALCULATES OPEN-TO-BUY

function opentoBuy() {
    const plannedSales = document.getElementById("plannedSales").value;
    const markDowns = document.getElementById("markDowns").value;
    const closingStock = document.getElementById("closingStock").value;
    const openingStock = document.getElementById("openingStock").value;
    const otb = (parseInt(plannedSales)+ parseInt(markDowns) + parseInt(closingStock)) - parseInt(openingStock);
    document.getElementById("otb").value = `${otb} units`;
}


//AN APP THAT COMPUTES REVENUE PER SQUARE FOOT

function squareFoot() {
    const totalnetRevenue = document.getElementById("totalnetRevenue").value;
    const rentalSpace = document.getElementById("rentalSpace").value;
    const spsf = parseInt(totalnetRevenue) / parseInt(rentalSpace);
    document.getElementById("spsf").value = `$${spsf} per square foot`;
}

//AN APP THAT COMPUTES SELL-THROUGH RATE

function sellThrough() {
    const unitSold = document.getElementById("unitSold").value;
    const unitsReceived = document.getElementById("unitsReceived").value;
    const str = (unitSold / unitsReceived) * 100;
    document.getElementById("str").value = `${str.toFixed(2)}%`;
}


//AN APP THAT COMPUTES STOCK-TO-SALES RATIO

function stsRatio() {
    const stsBegin = document.getElementById("stsBeginning").value;
    const stsSold = document.getElementById("stsSold").value;
    const stsr = stsBegin / stsSold;
    document.getElementById("stsr").value = stsr.toFixed(2);
}