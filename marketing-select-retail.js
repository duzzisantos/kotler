window.onload = function () {
    const selectCalc = document.getElementById("selectCalculator");
    const firstCalc = document.getElementById("demo1");
    const secondCalc = document.getElementById("demo2");
    const thirdCalc = document.getElementById("demo3");
    const fourthCalc = document.getElementById("demo4");
    const fifthCalc = document.getElementById("demo5");
    const sixthCalc = document.getElementById("demo6");
    const seventhCalc = document.getElementById("demo7");
    const eightCalc = document.getElementById("demo8");
    const ninthCalc = document.getElementById("demo9");
    const tenthCalc = document.getElementById("demo10");
    const eleventhCalc = document.getElementById("demo11");
    const twelfth = document.getElementById("demo12");
    const displayCalc = document.getElementById("displayCalc");

    selectCalc.onchange = function () { // These events are mutually exclusive. If one occurs, the others cannot.
        if (selectCalc.selectedIndex === 0) { //When the dropdown is on 'Select', no calculator is displayed.
            firstCalc.style.display = 'none';
            secondCalc.style.display = 'none';
            thirdCalc.style.display = 'none';
            fourthCalc.style.display = 'none';
            fifthCalc.style.display = 'none';
            sixthCalc.style.display = 'none';
            seventhCalc.style.display = 'none';
            eightCalc.style.display = 'none';
            ninthCalc.style.display = 'none';
            tenthCalc.style.display = 'none';
            eleventhCalc.style.display = 'none';
            twelfth.style.display = 'none';
            displayCalc.style.height = '400px';
        } else if (selectCalc.selectedIndex === 1) {
            firstCalc.style.display = 'block';
            secondCalc.style.display = 'none';
            thirdCalc.style.display = 'none';
            fourthCalc.style.display = 'none';
            fifthCalc.style.display = 'none';
            sixthCalc.style.display = 'none';
            seventhCalc.style.display = 'none';
            eightCalc.style.display = 'none';
            ninthCalc.style.display = 'none';
            tenthCalc.style.display = 'none';
            eleventhCalc.style.display = 'none';
            twelfth.style.display = 'none'
            displayCalc.style.height = "600px";
        } else if (selectCalc.selectedIndex === 2) {
            firstCalc.style.display = 'none';
            secondCalc.style.display = 'block';
            thirdCalc.style.display = 'none';
            fourthCalc.style.display = 'none';
            fifthCalc.style.display = 'none';
            sixthCalc.style.display = 'none';
            seventhCalc.style.display = 'none';
            eightCalc.style.display = 'none';
            ninthCalc.style.display = 'none';
            tenthCalc.style.display = 'none';
            eleventhCalc.style.display = 'none';
            twelfth.style.display = 'none';
            displayCalc.style.height = '400px';
        } else if (selectCalc.selectedIndex === 3) {
            firstCalc.style.display = 'none';
            secondCalc.style.display = 'none';
            thirdCalc.style.display = 'block';
            fourthCalc.style.display = 'none';
            fifthCalc.style.display = 'none';
            sixthCalc.style.display = 'none';
            seventhCalc.style.display = 'none';
            eightCalc.style.display = 'none';
            ninthCalc.style.display = 'none';
            tenthCalc.style.display = 'none';
            eleventhCalc.style.display = 'none';
            twelfth.style.display = 'none'
            displayCalc.style.height = "600px";
        } else if (selectCalc.selectedIndex === 4) {
            firstCalc.style.display = 'none';
            secondCalc.style.display = 'none';
            thirdCalc.style.display = 'none';
            fourthCalc.style.display = 'block';
            fifthCalc.style.display = 'none';
            sixthCalc.style.display = 'none';
            seventhCalc.style.display = 'none';
            eightCalc.style.display = 'none';
            ninthCalc.style.display = 'none';
            tenthCalc.style.display = 'none';
            eleventhCalc.style.display = 'none';
            twelfth.style.display = 'none'
            displayCalc.style.height = "600px";
        } else if (selectCalc.selectedIndex === 5) {
            firstCalc.style.display = 'none';
            secondCalc.style.display = 'none';
            thirdCalc.style.display = 'none';
            fourthCalc.style.display = 'none';
            fifthCalc.style.display = 'block';
            sixthCalc.style.display = 'none';
            seventhCalc.style.display = 'none';
            eightCalc.style.display = 'none';
            ninthCalc.style.display = 'none';
            tenthCalc.style.display = 'none';
            eleventhCalc.style.display = 'none';
            twelfth.style.display = 'none'
            displayCalc.style.height = "600px";
        } else if (selectCalc.selectedIndex === 6) {
            firstCalc.style.display = 'none';
            secondCalc.style.display = 'none';
            thirdCalc.style.display = 'none';
            fourthCalc.style.display = 'none';
            fifthCalc.style.display = 'none';
            sixthCalc.style.display = 'block';
            seventhCalc.style.display = 'none';
            eightCalc.style.display = 'none';
            ninthCalc.style.display = 'none';
            tenthCalc.style.display = 'none';
            eleventhCalc.style.display = 'none';
            twelfth.style.display = 'none';
            displayCalc.style.height = '400px';
        } else if (selectCalc.selectedIndex === 7) {
            firstCalc.style.display = 'none';
            secondCalc.style.display = 'none';
            thirdCalc.style.display = 'none';
            fourthCalc.style.display = 'none';
            fifthCalc.style.display = 'none';
            sixthCalc.style.display = 'none';
            seventhCalc.style.display = 'block';
            eightCalc.style.display = 'none';
            ninthCalc.style.display = 'none';
            tenthCalc.style.display = 'none';
            eleventhCalc.style.display = 'none';
            twelfth.style.display = 'none';
            displayCalc.style.height = '400px';
        } else if (selectCalc.selectedIndex === 8) {
            firstCalc.style.display = 'none';
            secondCalc.style.display = 'none';
            thirdCalc.style.display = 'none';
            fourthCalc.style.display = 'none';
            fifthCalc.style.display = 'none';
            sixthCalc.style.display = 'none';
            seventhCalc.style.display = 'none';
            eightCalc.style.display = 'block';
            ninthCalc.style.display = 'none';
            tenthCalc.style.display = 'none';
            eleventhCalc.style.display = 'none';
            twelfth.style.display = 'none'
            displayCalc.style.height = "600px";
        } else if (selectCalc.selectedIndex === 9) {
            firstCalc.style.display = 'none';
            secondCalc.style.display = 'none';
            thirdCalc.style.display = 'none';
            fourthCalc.style.display = 'none';
            fifthCalc.style.display = 'none';
            sixthCalc.style.display = 'none';
            seventhCalc.style.display = 'none';
            eightCalc.style.display = 'none';
            ninthCalc.style.display = 'block';
            tenthCalc.style.display = 'none';
            eleventhCalc.style.display = 'none';
            twelfth.style.display = 'none'
            displayCalc.style.height = "600px";
        } else if (selectCalc.selectedIndex === 10) {
            firstCalc.style.display = 'none';
            secondCalc.style.display = 'none';
            thirdCalc.style.display = 'none';
            fourthCalc.style.display = 'none';
            fifthCalc.style.display = 'none';
            sixthCalc.style.display = 'none';
            seventhCalc.style.display = 'none';
            eightCalc.style.display = 'none';
            ninthCalc.style.display = 'none';
            tenthCalc.style.display = 'block';
            eleventhCalc.style.display = 'none';
            twelfth.style.display = 'none';
            displayCalc.style.height = '400px';
        } else if (selectCalc.selectedIndex === 11) {
            firstCalc.style.display = 'none';
            secondCalc.style.display = 'none';
            thirdCalc.style.display = 'none';
            fourthCalc.style.display = 'none';
            fifthCalc.style.display = 'none';
            sixthCalc.style.display = 'none';
            seventhCalc.style.display = 'none';
            eightCalc.style.display = 'none';
            ninthCalc.style.display = 'none';
            tenthCalc.style.display = 'none';
            eleventhCalc.style.display = 'block';
            twelfth.style.display = 'none';
            displayCalc.style.height = '400px';
        } else if (selectCalc.selectedIndex === 12) {
            firstCalc.style.display = 'none';
            secondCalc.style.display = 'none';
            thirdCalc.style.display = 'none';
            fourthCalc.style.display = 'none';
            fifthCalc.style.display = 'none';
            sixthCalc.style.display = 'none';
            seventhCalc.style.display = 'none';
            eightCalc.style.display = 'none';
            ninthCalc.style.display = 'none';
            tenthCalc.style.display = 'none';
            eleventhCalc.style.display = 'none';
            twelfth.style.display = 'block';
            displayCalc.style.height = '400px';
        } 
    }
}
