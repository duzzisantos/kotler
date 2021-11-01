//AN APP THAT CALCULATES ANNUAL RECURRING REVENUE

function annual() {
    const contractValue = document.getElementById("contractValue").value;
    const duration = document.getElementById("contractDur").value;
    const annoRevenue = contractValue / duration;
    document.getElementById("annoRevenue").value = `$${annoRevenue}`;
}

//AN APP THAT CALCULATES AVERAGE REVENUE PER ACCOUNT

function arpa() {
    const totalRev = document.getElementById("totalRevenue").value;
    const subscribers = document.getElementById("subscribers").value;
    const avRevenue = totalRev / subscribers;
    document.getElementById('avRevenue').value = `$${Math.round(avRevenue)}`;
}

//AN APP THAT CALCULATES QUOTA ATTAINMENT

function salesQuota() {
    const closeDeals = document.getElementById('closeDeals').value;
    const periodQuota = document.getElementById("periodQuota").value;
    const myQuota = closeDeals / periodQuota;
    document.getElementById("myQuota").value = `$${Math.round(myQuota)}`;
}

//AN APP THAT CALCULATES WIN RATE

function winRate() {
    const wonOpps = document.getElementById("wonOpps").value;
    const totalOpps = document.getElementById("totalOpps").value;
    const rateWin = wonOpps / totalOpps * 100;
    document.getElementById('rateWin').value = `${Math.round(rateWin)}%`;
}

//AN APP THAT CALCULATES CONVERSION RATE

function conversionRate() {
    const numConversion = document.getElementById("numberConversion").value;
    const prospects = document.getElementById("prospects").value;
    const rateConversion = numConversion / prospects * 100;
    document.getElementById("rateConversion").value = `${Math.round(rateConversion)}%`;
}

//AN APP THAT CALCULATES SALES CYCLE

function salesCycle() {
    const totalDays = document.getElementById("totalDays").value;
    const dealsCycle = document.getElementById("dealsCycle").value;
    const cycleSales = totalDays - dealsCycle;
    document.getElementById("cycleSales").value = cycleSales;
    if (cycleSales < totalDays) {
        document.getElementById("cycleSales").value = cycleSales;
    } else if (cycleSales > totalDays) {
        document.getElementById("cycleSales").value = `${cycleSales} days`;
    }
}

//AN APP THAT CALCULATES AVERAGE DEAL SIZE

function asp() {
    const salesValue = document.getElementById('salesValue').value;
    const dealTotal = document.getElementById("dealTotal").value;
    const sizeDeal = salesValue / dealTotal;
    document.getElementById('sizeDeal').value = `$${sizeDeal.toFixed(2)}`;
}

//AN APP THAT CALCULATES AVERAGE PROFIT MARGIN 

function apMargin() {
    const totalCost = document.getElementById("totalCost").value;
    const totalRev = document.getElementById("totalRev").value;
    const refunds = document.getElementById('refunds').value;
    const profitMargin = [(totalCost - totalRev) / (totalRev - refunds)];
    document.getElementById("profitMargin").value = `${Math.round(profitMargin)}%`;
}

//AN APP THAT CALCULATES DEAL SPILLAGE

function spillage() {
    const pendingDeals = document.getElementById("pendingDeals").value;
    const closeTime = document.getElementById("closeTime").value;
    const spillOver = document.getElementById("spillOver").value;
    const dealSpill = closeTime - spillOver;
    document.getElementById("dealSpill").value = `${pendingDeals} deals are ${dealSpill} days overdue`;
}

//AN APP THAT CALCULATES CHURN RATE
function churnRate() {
    const churn = document.getElementById("churn").value;
    const customerTotal = document.getElementById("customerTotal").value;
    const rateChurn = churn / customerTotal * 100;
    document.getElementById("rateChurn").value = `${Math.round(rateChurn)}%`;
}

//AN APP THAT CALCULATES NET RETENTION PERCENTAGE

function nrp() {
    const renewArr = document.getElementById("renewArr").value;
    const upSell = document.getElementById("upSell").value;
    const nrpChurn = document.getElementById("nrpChurn").value;
    const targetArr = document.getElementById("targetArr").value;
    const newRetention = [(renewArr + upSell - nrpChurn) / targetArr];
    document.getElementById("newRetention").value = `${Math.round(newRetention)}%`;
}

//AN APP THAT CALCULATES PIPELINE COVERAGE

function pipeLine() {
    const stageTwo = document.getElementById("stageTwo").value;
    const pipeValue = document.getElementById("pipeValue").value;
    const foreCast = document.getElementById("foreCast").value;
    const valClosed = document.getElementById("valClosed").value;
    const pipeCoverage = [(stageTwo + pipeValue) / (foreCast - valClosed)];
    document.getElementById("pipeCoverage").value = `$${Math.round(pipeCoverage)}`;
}

//AN APP THAT CALCULATES SALES PRODUCTIVITY RATE

function prodRate() {
    const relateQuota = document.getElementById("relateQuota").value;
    const emailSent = document.getElementById("emailSent").value;
    const meetings = document.getElementById("meeTings").value;
    const calls = document.getElementById("calLs").value;
    const otherEng = document.getElementById("otherEng").value;
    const salesProd = [(parseInt(emailSent) + parseInt(meetings) + parseInt(calls) + parseInt(otherEng)) / parseInt(relateQuota)] * 100;
    document.getElementById("salesProd").value = `${Math.round(salesProd)}%`;
}

//AN APP THAT CALCULATES SALES GROWTH RATE

function salesGrowth() {
    const currSales = document.getElementById("currSales").value;
    const priorSales = document.getElementById("priorSales").value;
    const growthRate = (currSales - priorSales) / priorSales;
    document.getElementById('growthRate').value = `${growthRate.toFixed(2)}%`;
}

//AN APP THAT CALCULATES SALES TAX

function salesTax() {
    const vatSales = document.getElementById("vatSales").value;
    const vatRate = document.getElementById("vatRate").value;
    const tax = vatSales * vatRate;
    document.getElementById("tax").value = `$${tax.toFixed(2)}`;
}

//AN APP THAT CALCULATES DEFERRED

function defRevenue() {
    const numPrepaid = document.getElementById("numPrepaid").value;
    const avAmount = document.getElementById("avAmount").value;
    const revenueDefer = numPrepaid * avAmount;
    document.getElementById("revenueDefer").value = `$${revenueDefer.toFixed(2)}`;
}

