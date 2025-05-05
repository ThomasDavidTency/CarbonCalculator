// Data for CO2 emissions per meter for CIPP lining materials
const fiberglassData = {
    "200": 3.11,
    "250": 3.78,
    "300": 4.44,
    "400": 6.00,
    "500": 7.78,
    "600": 10.22,
    "700": 13.78,
    "800": 19.78,
    "900": 24.89,
    "1000": 30.22,
    "1200": 45.56
};

const needleFeltData = {
    "200": 2.67,
    "250": 3.33,
    "300": 4.89,
    "400": 8.44,
    "500": 13.33,
    "600": 18.67,
    "700": 25.78,
    "800": 37.33,
    "900": 47.11,
    "1000": 58.44,
    "1200": 87.56
};

// Data for HDPE
const hdpeData = {
    "HDPE110": { aggregateCO2: 5.45, totalEmbodiedCarbon: 11.29, asphaltCO2: 7.96 },
    "HDPE125": { aggregateCO2: 6.95, totalEmbodiedCarbon: 12.66, asphaltCO2: 8.79 },
    "HDPE140": { aggregateCO2: 8.73, totalEmbodiedCarbon: 13.87, asphaltCO2: 9.44 },
    "HDPE160": { aggregateCO2: 11.40, totalEmbodiedCarbon: 15.16, asphaltCO2: 10.09 },
    "HDPE180": { aggregateCO2: 14.41, totalEmbodiedCarbon: 16.38, asphaltCO2: 10.56 },
    "HDPE200": { aggregateCO2: 17.78, totalEmbodiedCarbon: 17.67, asphaltCO2: 10.95 },
    "HDPE225": { aggregateCO2: 22.56, totalEmbodiedCarbon: 18.88, asphaltCO2: 11.21 },
    "HDPE250": { aggregateCO2: 27.64, totalEmbodiedCarbon: 20.32, asphaltCO2: 11.39 },
    "HDPE280": { aggregateCO2: 34.72, totalEmbodiedCarbon: 23.04, asphaltCO2: 11.45 },
    "HDPE315": { aggregateCO2: 43.97, totalEmbodiedCarbon: 25.36, asphaltCO2: 11.40 },
    "HDPE355": { aggregateCO2: 55.95, totalEmbodiedCarbon: 27.69, asphaltCO2: 10.92 },
    "HDPE400": { aggregateCO2: 70.72, totalEmbodiedCarbon: 31.16, asphaltCO2: 10.12 },
    "HDPE450": { aggregateCO2: 89.61, totalEmbodiedCarbon: 34.99, asphaltCO2: 8.96 },
    "HDPE500": { aggregateCO2: 110.38, totalEmbodiedCarbon: 0, asphaltCO2: 6.54 },
    "HDPE560": { aggregateCO2: 138.67, totalEmbodiedCarbon: 8.83, asphaltCO2: 2.95 },
    "HDPE630": { aggregateCO2: 175.24, totalEmbodiedCarbon: 10.12, asphaltCO2: 7.96 },
    "HDPE710": { aggregateCO2: 222.86, totalEmbodiedCarbon: 11.29, asphaltCO2: 8.79 },
    "HDPE800": { aggregateCO2: 282.60, totalEmbodiedCarbon: 12.66, asphaltCO2: 9.44 }
};

// Updated data structures for D&L Method with aggregate data
const concreteData = {
    "DN225": { carbonConcrete: 16.88, asphaltCO2: 8.83, aggregateCO2: 5.10 },
    "DN300": { carbonConcrete: 23.29, asphaltCO2: 10.12, aggregateCO2: 5.51 },
    "DN375": { carbonConcrete: 28.79, asphaltCO2: 11.29, aggregateCO2: 5.79 },
    "DN450": { carbonConcrete: 42.44, asphaltCO2: 12.66, aggregateCO2: 5.99 },
    "DN525": { carbonConcrete: 52.96, asphaltCO2: 13.87, aggregateCO2: 6.07 },
    "DN600": { carbonConcrete: 66.75, asphaltCO2: 15.16, aggregateCO2: 6.04 },
    "DN675": { carbonConcrete: 78.43, asphaltCO2: 16.38, aggregateCO2: 5.92 },
    "DN750": { carbonConcrete: 95.30, asphaltCO2: 17.67, aggregateCO2: 5.67 },
    "DN825": { carbonConcrete: 107.38, asphaltCO2: 18.88, aggregateCO2: 5.34 },
    "DN900": { carbonConcrete: 140.35, asphaltCO2: 20.32, aggregateCO2: 4.82 },
    "DN1050": { carbonConcrete: 194.72, asphaltCO2: 23.04, aggregateCO2: 3.47 },
    "DN1200": { carbonConcrete: 224.32, asphaltCO2: 25.36, aggregateCO2: 1.91 },
    "DN1350": { carbonConcrete: 250.30, asphaltCO2: 27.69, aggregateCO2: -0.00 },
    "DN1600": { carbonConcrete: 329.13, asphaltCO2: 31.16, aggregateCO2: -3.54 },
    "DN1800": { carbonConcrete: 409.21, asphaltCO2: 34.99, aggregateCO2: -8.37 }
};
// Show navbar on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 20) {
        navbar.classList.add('show');
    } else {
        navbar.classList.remove('show');
    }
});

function scrollToTopAndRefresh() {
    // Smooth scroll to the top of the page
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    // Wait for the scroll to complete before refreshing
    setTimeout(function() {
        location.reload(); // Reload the page after scroll
    }, 500); // Adjust this delay if needed (500ms is a good start)
}
let material_vals = [0, 0];

let chartInstanceMaterial = null;
let chartInstanceMachinary = null;
let chartInstanceFreight = null;
let chartInstanceTransport = null;
let cippdonut = null;
let donut = null;

let machDL = 0;
let frDL = 0;
let matDL = 0;
let machCIPP = 0;
let frCIPP = 0;
let matCIPP = 0;
let transCIPP = 0;
let transDL = 0;
let rate=100;



async function fetchData() {
    try {
        const response = await fetch('https://script.google.com/macros/s/AKfycby-_Hl9AtdtjBmRXll8XkKK4LpdVCQwEyavAxL3yvoMEKaEAWx2_eP-jfu-nTa821uz/exec'); // Replace with your actual API endpoint
        const data = await response.json();
        console.log(data)
        
        // Populate the dropdowns with data from the API
        populateNominalDiameterOptions(data);
        console.log(data.CommDom)
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}


// Function to populate nominal diameter options for D&L Method
function updateNominalDiameterOptions(formId) {
    const materialType = document.getElementById(`materialType${formId}`).value;
    const nominalDiameterSelect = document.getElementById(`nominalDiameter${formId}`);

    // Clear existing options
    nominalDiameterSelect.innerHTML = '';

    let options = [];

    if (formId === 'DL') {
        if (materialType === "Concrete") {
            options = Object.keys(concreteData);
        } else if (materialType === "HDPE") {
            options = Object.keys(hdpeData);
        }
    } else if (formId === 'CIPP') {
        // For CIPP, we use the diameters from fiberglass and needle felt data
        options = Object.keys(fiberglassData); // Assuming both have the same nominal diameters
    }

    // Populate the nominal diameter dropdown
    options.forEach(option => {
        const opt = document.createElement('option');
        opt.value = option;
        opt.textContent = option;
        nominalDiameterSelect.appendChild(opt);
    });
}

// Event listeners for material type selection in both forms
document.getElementById('materialTypeDL').addEventListener('change', () => updateNominalDiameterOptions('DL'));
document.getElementById('liningMaterialCIPP').addEventListener('change', () => updateNominalDiameterOptions('CIPP'));

// Initial population of nominal diameter options for both forms
updateNominalDiameterOptions('DL');
updateNominalDiameterOptions('CIPP');

// Combined function to calculate emissions for both D&L Method and CIPP
document.getElementById('calculateEmissions').addEventListener('click', function(event) {
    event.preventDefault();
    
    // D&L Method calculations
    const materialTypeDL = document.getElementById('materialTypeDL').value;
    const nominalDiameterDL = document.getElementById('nominalDiameterDL').value;
    const lengthDL = parseFloat(document.getElementById('lengthDL').value);
    const depthDL = parseFloat(document.getElementById('depthDL').value);

    let totalCarbonEmissionDL = 0;
    let resultMessageDL = '';

    if (materialTypeDL === "Concrete") {
        const pipeInfo = concreteData[nominalDiameterDL];

        if (pipeInfo) {

            totalCarbonEmissionDL = (pipeInfo.carbonConcrete + pipeInfo.asphaltCO2 + pipeInfo.aggregateCO2) * lengthDL; // kgCO2e
            matDL = totalCarbonEmissionDL;
            material_vals[0]=totalCarbonEmissionDL;
            resultMessageDL = `
                <h2>Total Carbon Emission (D&L Method)</h2>
                <p>For a pipe with nominal diameter ${nominalDiameterDL}, length ${lengthDL} m, and depth ${depthDL} mm:</p>
                <p><strong>Total Carbon Emission: ${totalCarbonEmissionDL.toFixed(2)} kgCO2e</strong></p>
            `;
        } else {
            resultMessageDL = `<p>Error: Invalid Nominal Diameter selected for Concrete.</p>`;
        }
    } else if (materialTypeDL === "HDPE") {
        const pipeInfo = hdpeData[nominalDiameterDL];

        if (pipeInfo) {
            totalCarbonEmissionDL = (pipeInfo.carbonConcrete + pipeInfo.asphaltCO2 + pipeInfo.aggregateCO2) * lengthDL; // kgCO2e
            material_vals[0]=totalCarbonEmissionDL;
            matDL = totalCarbonEmissionDL;
            resultMessageDL = `
                <h2>Total Carbon Emission (D&L Method)</h2>
                <p>For a pipe with nominal diameter ${nominalDiameterDL}, length ${lengthDL} m, and depth ${depthDL} mm:</p>
                <p><strong>Total Carbon Emission: ${totalCarbonEmissionDL.toFixed(2)} kgCO2e</strong></p>
            `;
        } else {
            resultMessageDL = `<p>Error: Invalid Nominal Diameter selected for HDPE.</p>`;
        }
    }

    document.getElementById('resultDL').innerHTML = resultMessageDL;

    // CIPP calculations
    const nominalDiameterCIPP = document.getElementById('nominalDiameterCIPP').value;
    const liningMaterial = document.getElementById('liningMaterialCIPP').value;

    let totalCarbonEmissionCIPP = 0;
    let resultMessageCIPP = '';

    if (liningMaterial === "Generic - Fiberglass + PE Resin") {
        const co2PerMeter = fiberglassData[nominalDiameterCIPP];

        if (co2PerMeter) {
            totalCarbonEmissionCIPP = co2PerMeter * lengthDL; // kgCO2e
            totalCarbonEmissionDL = (pipeInfo.carbonConcrete + pipeInfo.asphaltCO2 + pipeInfo.aggregateCO2) * lengthDL; // kgCO2e
            matCIPP = totalCarbonEmissionCIPP;
            material_vals[1]=totalCarbonEmissionDL;
            resultMessageCIPP = `
                <h2>Total Carbon Emission (CIPP - Fiberglass)</h2>
                <p>For a pipe with nominal diameter ${nominalDiameterCIPP}, length ${lengthDL} m:</p>
                <p><strong>Total Carbon Emission: ${totalCarbonEmissionCIPP.toFixed(2)} kgCO2e</strong></p>
            `;
        } else {
            resultMessageCIPP = `<p>Error: Invalid Nominal Diameter selected for Fiberglass.</p>`;
        }
    } else if (liningMaterial === "Generic - Needle Felt + PE Resin") {
        const co2PerMeter = needleFeltData[nominalDiameterCIPP];
        

        if (co2PerMeter) {
            totalCarbonEmissionCIPP = co2PerMeter * lengthDL; // kgCO2e
            matCIPP = totalCarbonEmissionCIPP;
            material_vals[1]=totalCarbonEmissionDL;

            resultMessageCIPP = `
                <h2>Total Carbon Emission (CIPP - Needle Felt)</h2>
                <p>For a pipe with nominal diameter ${nominalDiameterCIPP}, length ${lengthDL} m:</p>
                <p><strong>Total Carbon Emission: ${totalCarbonEmissionCIPP.toFixed(2)} kgCO2e</strong></p>
            `;
        } else {
            resultMessageCIPP = `<p>Error: Invalid Nominal Diameter selected for Needle Felt.</p>`;
        }
    }

    // Display the results for CIPP
    document.getElementById('resultCIPP').innerHTML = resultMessageCIPP;
    showChart("MatchartSection", "MatcomparisonChart", totalCarbonEmissionDL, totalCarbonEmissionCIPP)
    // const chartDiv = document.createElement('div');
    //     chartDiv.id = 'material_chart';
    //     chartDiv.style.width = '80%';
    //     chartDiv.style.height = '500px';
    //     document.body.appendChild(chartDiv);
    // plotMachinaryResults(material_vals);
});
async function fetchData() {
    const response = await fetch('https://script.google.com/macros/s/AKfycby-_Hl9AtdtjBmRXll8XkKK4LpdVCQwEyavAxL3yvoMEKaEAWx2_eP-jfu-nTa821uz/exec'); // Replace with actual API endpoint
    const data = await response.json();
    console.log(data);

    populateMachDropdowns(data);
}

function populateMachDropdowns(data) {
    window.machineOptions = data.Machine.map(machine => `<option value="${machine.name}" data-consumption="${machine.Consumption}">${machine.name}</option>`).join('');
    window.fuelOptions = data.Fuel.map(fuel => `<option value="${fuel.name}" data-co2="${fuel.CO2Emm}">${fuel.name}</option>`).join('');
    addMachineRow('dl-machine');
    addMachineRow('cipp-machine');
    window.freightOptions = data.Frieght.map(freight => `<option value="${freight.name}" data-co2="${freight.CO2Emm}">${freight.name}</option>`).join('');
    window.freightTypeOptions = data.FrieghtOpt.map(option => `<option value="${option.name}">${option.name}</option>`).join('');
    addFreightRow('dl-freight');
    addFreightRow('cipp-freight');
    window.transPOptions = data.CommPub.map(transportP => `<option value="${transportP.name}" data-co2="${transportP.co2}">${transportP.name}</option>`).join('');
    addTransportPRow('dl-transportpub');
    addTransportPRow('cipp-transportpub');
    window.transAOptions = data.CommAir.map(transportA => `<option value="${transportA.name}" data-co2="${transportA.co2}">${transportA.name}</option>`).join('');
    addTransportARow('dl-transportair');
    addTransportARow('cipp-transportair');
    window.transDOptions = data.CommDom.map(transportD => `<option value="${transportD.name}" data-co2="${transportD.co2}">${transportD.name}</option>`).join('');
    addTransportDRow('dl-transportdom');
    addTransportDRow('cipp-transportdom');

}

function addTransportPRow(sectionId) {
    const form = document.getElementById(sectionId);
    const div = document.createElement('div');
    div.className = 'transpub-entry';
    div.innerHTML = `
        <div style="display: flex; gap: 10px;">
            <label>Transport:</label>
            <select name="transport" onchange="updateConsumption(this)">${window.transPOptions}</select>
            
        </div>
        <div style="display: flex; gap: 10px; margin-top: 5px;">
            <label>Distance:</label>
            <input type="number" name="distance" min="1" value="1" onchange="updateConsumption(this)">
            <label>Headcount:</label>
            <input type="number" name="quantity" min="1" value="1" onchange="updateConsumption(this)">
        </div>
        <button class="remove" type="button" onclick="this.parentElement.remove()">Remove</button>
        <hr>
        <br>
    `;
    form.appendChild(div);
}
function addTransportARow(sectionId) {
    const form = document.getElementById(sectionId);
    const div = document.createElement('div');
    div.className = 'transair-entry';
    div.innerHTML = `
        <div style="display: flex; gap: 10px;">
            <label>Transport:</label>
            <select name="transport" onchange="updateConsumption(this)">${window.transAOptions}</select>
            
        </div>
        <div style="display: flex; gap: 10px; margin-top: 5px;">
            <label>Distance:</label>
            <input type="number" name="distance" min="1" value="1" onchange="updateConsumption(this)">
            <label>Headcount:</label>
            <input type="number" name="quantity" min="1" value="1" onchange="updateConsumption(this)">
        </div>
        <button class="remove" type="button" onclick="this.parentElement.remove()">Remove</button>
        <hr>
        <br>
    `;
    form.appendChild(div);
}
function addTransportDRow(sectionId) {
    const form = document.getElementById(sectionId);
    const div = document.createElement('div');
    div.className = 'transdom-entry';
    div.innerHTML = `
        <div style="display: flex; gap: 10px;">
            <label>Transport:</label>
            <select name="transport" onchange="updateConsumption(this)">${window.transDOptions}</select>
            
        </div>
        <div style="display: flex; gap: 10px; margin-top: 5px;">
            <label>Distance:</label>
            <input type="number" name="distance" min="1" value="1" onchange="updateConsumption(this)">
            <label>Headcount:</label>
            <input type="number" name="quantity" min="1" value="1" onchange="updateConsumption(this)">
        </div>
        <button class="remove" type="button" onclick="this.parentElement.remove()">Remove</button>
        <hr>
        <br>
    `;
    form.appendChild(div);
}

function calculateTotalTranspubEmission() {
    

    let dltransPTotal = 0;
    let cipptransPTotal = 0;
    let dltransATotal = 0;
    let cipptransATotal = 0;
    let dltransDTotal = 0;
    let cipptransDTotal = 0;

    transCIPP = 0;
    transDL = 0;
    
    document.querySelectorAll('#dl-transportpub .transpub-entry').forEach(entry => {
        const Transport = entry.querySelector('[name="transport"]');
        const quantity = entry.querySelector('[name="quantity"]').value;
        const distance = entry.querySelector('[name="distance"]').value;
        const co2 = parseFloat(Transport.selectedOptions[0].dataset.co2 || 0);
        dltransPTotal +=  co2 * quantity * distance;
        console.log(dltransPTotal);
    });
    document.querySelectorAll('#cipp-transportpub .transpub-entry').forEach(entry => {
        const Transport = entry.querySelector('[name="transport"]');
        const quantity = entry.querySelector('[name="quantity"]').value;
        const distance = entry.querySelector('[name="distance"]').value;
        const co2 = parseFloat(Transport.selectedOptions[0].dataset.co2 || 0);
        cipptransPTotal +=  co2 * quantity * distance;
        console.log("CIPP")
        console.log(cipptransPTotal);
    });
    document.querySelectorAll('#dl-transportair .transair-entry').forEach(entry => {
        const Transport = entry.querySelector('[name="transport"]');
        const quantity = entry.querySelector('[name="quantity"]').value;
        const distance = entry.querySelector('[name="distance"]').value;
        const co2 = parseFloat(Transport.selectedOptions[0].dataset.co2 || 0);
        dltransATotal +=  co2 * quantity * distance;
        console.log(dltransATotal);
    });
    document.querySelectorAll('#cipp-transportair .transair-entry').forEach(entry => {
        const Transport = entry.querySelector('[name="transport"]');
        const quantity = entry.querySelector('[name="quantity"]').value;
        const distance = entry.querySelector('[name="distance"]').value;
        const co2 = parseFloat(Transport.selectedOptions[0].dataset.co2 || 0);
        cipptransATotal +=  co2 * quantity * distance;
        console.log(cipptransATotal)
    });
    document.querySelectorAll('#dl-transportdom .transdom-entry').forEach(entry => {
        const Transport = entry.querySelector('[name="transport"]');
        const quantity = entry.querySelector('[name="quantity"]').value;
        const distance = entry.querySelector('[name="distance"]').value;
        const co2 = parseFloat(Transport.selectedOptions[0].dataset.co2 || 0);
        dltransDTotal +=  co2 * quantity * distance;
        console.log(dltransDTotal);
    });
    document.querySelectorAll('#cipp-transportdom .transdom-entry').forEach(entry => {
        const Transport = entry.querySelector('[name="transport"]');
        const quantity = entry.querySelector('[name="quantity"]').value;
        const distance = entry.querySelector('[name="distance"]').value;
        const co2 = parseFloat(Transport.selectedOptions[0].dataset.co2 || 0);
        cipptransDTotal +=  co2 * quantity * distance;
        console.log(cipptransDTotal);
    });
    transCIPP = cipptransPTotal + cipptransATotal + cipptransDTotal;
    transDL = dltransPTotal + dltransATotal + dltransDTotal;
    showChart("TransportchartSection", "transportcomparisonChart", transDL, transCIPP)

    document.getElementById('resultTrans-DL').innerText = `Total Emission for D&L: ${transDL.toFixed(2)} kg CO2`;
    document.getElementById('resultTrans-CIPP').innerText = `Total Emission for CIPP: ${transCIPP.toFixed(2)} kg CO2`;

    console.log(`Total Emission for UP CIPP: ${transCIPP.toFixed(2)} kg CO2`)
    console.log(`Total Emission for DL: ${transDL.toFixed(2)} kg CO2`)
}

function addMachineRow(sectionId) {
    const form = document.getElementById(sectionId);
    const div = document.createElement('div');
    div.className = 'machine-entry';
    div.innerHTML = `
        <div style="display: flex; gap: 10px;">
            <label>Machine:</label>
            <select name="machine" onchange="updateConsumption(this)">${window.machineOptions}</select>
            <label>Quantity:</label>
            <input type="number" name="quantity" min="1" value="1" onchange="updateConsumption(this)">
        </div>
        <div style="display: flex; gap: 10px; margin-top: 5px;">
            <label>Fuel Type:</label>
            <select name="fuel" onchange="updateConsumption(this)">${window.fuelOptions}</select>
            <label>Operation Hours:</label>
            <input type="number" name="hours" min="1" value="1" onchange="updateConsumption(this)">
        </div>
        <button class="remove" type="button" onclick="this.parentElement.remove()">Remove</button>
        <hr>
        <br>
    `;
    form.appendChild(div);
}

function calculateTotalMachineryEmission() {
    let dlMachTotal = 0;
    let cippMachTotal = 0;
    
    document.querySelectorAll('#dl-machine .machine-entry').forEach(entry => {
        const machine = entry.querySelector('[name="machine"]');
        const quantity = entry.querySelector('[name="quantity"]').value;
        const fuel = entry.querySelector('[name="fuel"]');
        const hours = entry.querySelector('[name="hours"]').value;
        const consumption = parseFloat(machine.selectedOptions[0].dataset.consumption || 0);
        const co2 = parseFloat(fuel.selectedOptions[0].dataset.co2 || 0);
        
        dlMachTotal += consumption * co2 * quantity * hours;
        machDL = dlMachTotal;
        console.log("calculate button is clicking")
    });
    document.querySelectorAll('#cipp-machine .machine-entry').forEach(entry => {
        const machine = entry.querySelector('[name="machine"]');
        const quantity = entry.querySelector('[name="quantity"]').value;
        const fuel = entry.querySelector('[name="fuel"]');
        const hours = entry.querySelector('[name="hours"]').value;
        const consumption = parseFloat(machine.selectedOptions[0].dataset.consumption || 0);
        const co2 = parseFloat(fuel.selectedOptions[0].dataset.co2 || 0);
        cippMachTotal += consumption * co2 * quantity * hours;
        machCIPP = cippMachTotal;
    });
    showChart("MachinerychartSection", "MachinerycomparisonChart", dlMachTotal, cippMachTotal)

    document.getElementById('resultM-DL').innerText = `Total Emission for D&L: ${dlMachTotal.toFixed(2)} kg CO2`;
    document.getElementById('resultM-CIPP').innerText = `Total Emission for CIPP: ${cippMachTotal.toFixed(2)} kg CO2`;
    console.log(`Total Emission for UP CIPP: ${dlMachTotal.toFixed(2)} kg CO2`)
    console.log(`Total Emission for DL: ${cippMachTotal.toFixed(2)} kg CO2`)
}


function addFreightRow(sectionId) {
    const form = document.getElementById(sectionId);
    const div = document.createElement('div');
    div.className = 'freight-entry';
    div.innerHTML = `
        <div style="display: flex; gap: 10px;">
            <label>Freight:</label>
            <select name="freight" onchange="updateEmission(this)">${window.freightOptions}</select>
            <label>Weight (Tonnes):</label>
            <input type="number" name="weight" min="1" value="1" onchange="updateEmission(this)">
        </div>
        <div style="display: flex; gap: 10px; margin-top: 5px;">
            <label>Freight Type:</label>
            <select name="freightType">${window.freightTypeOptions}</select>
            <label>Distance (km):</label>
            <input type="number" name="distance" min="1" value="1" onchange="updateEmission(this)">
        </div>
        <button class="remove" type="button" onclick="this.parentElement.remove()">Remove</button>
        <hr>
        <br>
    `;
    form.appendChild(div);
}

function calculateTotalFrieghtEmission() {
    let dlTotal = 0;
    let cippTotal = 0;
    
    document.querySelectorAll('#dl-freight .freight-entry').forEach(entry => {
        const weight = entry.querySelector('[name="weight"]').value;
        const distance = entry.querySelector('[name="distance"]').value;
        const freight = entry.querySelector('[name="freight"]');
        const co2 = parseFloat(freight.selectedOptions[0].dataset.co2 || 0);
        dlTotal += co2 * weight * distance;
        console.log(freight);
        console.log(co2);
        frDL = dlTotal;
    });
    document.querySelectorAll('#cipp-freight .freight-entry').forEach(entry => {
        const weight = entry.querySelector('[name="weight"]').value;
        const distance = entry.querySelector('[name="distance"]').value;
        const freight = entry.querySelector('[name="freight"]');
        const co2 = parseFloat(freight.selectedOptions[0].dataset.co2 || 0);
        cippTotal += co2 * weight * distance;
        frCIPP = cippTotal
    });
    showChart("FreightchartSection", "freightcomparisonChart", dlTotal, cippTotal)
    document.getElementById('resultF-DL').innerText = `Total Emission for D&L: ${dlTotal.toFixed(2)} kg CO2`;
    document.getElementById('resultF-CIPP').innerText = `Total Emission for CIPP: ${cippTotal.toFixed(2)} kg CO2`;
    console.log(`Total Emission for UP CIPP: ${cippTotal.toFixed(2)} kg CO2`)
    console.log(`Total Emission for DL: ${dlTotal.toFixed(2)} kg CO2`)
}

// function updateFreightEmission() {
//     document.querySelectorAll('.freight-entry').forEach(entry => {
//         const freight = entry.querySelector('[name="freight"]');
//         const weight = entry.querySelector('[name="weight"]').value;
//         const distance = entry.querySelector('[name="distance"]').value;
//         const co2 = parseFloat(freight.selectedOptions[0].dataset.co2 || 0);
        
//         const emission = co2 * weight * distance;
//         entry.querySelector('.section-emission').innerText = `Estimated Emission: ${emission.toFixed(2)} kg CO2`;
//     });
// }

function clicktest() {
    console.log("Button clicked");
}


// function plotMachinaryResults(values) {
//     const trace = {
//         y: ["D&L method, CIPP"],
//         x: values,
//         type: 'bar',
//         orientation: 'h',
//         marker: { color: 'blue' }
//     };

//     const layout = {
//         title: 'Method Results',
//         xaxis: { title: 'Result Value' },
//         yaxis: { title: 'Method' },
//         margin: { l: 100, r: 50, t: 50, b: 50 }
//     };

//     Plotly.newPlot('material_chart', [trace], layout);
// }

function showChart(divC, chartName, cipp, dl) {
    const chartDiv = document.getElementById(divC);
    chartDiv.style.display = 'block';
    if (divC == "MatchartSection") {
        if (chartInstanceMaterial) {
            chartInstanceMaterial.destroy();
        }
    }
    if (divC == "FreightchartSection") {
        if (chartInstanceFreight) {
            chartInstanceFreight.destroy();
        }
    }
    if (divC == "MachinerychartSection") {
        if (chartInstanceMachinary) {
            chartInstanceMachinary.destroy();
        }
    }
    if (divC == "TransportchartSection") {
        if (chartInstanceTransport) {
            chartInstanceTransport.destroy();
        }
    }
    const ctx = document.getElementById(chartName).getContext('2d');
    const data = {
      labels: ["Methods"],
      datasets: [
        {
          label: 'CIPP',
          data: [dl], // Sample data
          backgroundColor: '#4e79a7',
          borderRadius: 10,
          barThickness: 30
        },
        {
          label: 'D&L',
          data: [cipp], // Sample data
          backgroundColor: '#f28e2b',
          borderRadius: 10,
          barThickness: 30
        }
      ]
    };
  
    const config = {
      type: 'bar',
      data: data,
      options: {
        indexAxis: 'y',
        responsive: true,
        plugins: {
          legend: {
            position: 'right',
            labels: {
              boxWidth: 20,
              padding: 15,
              font: {
                size: 14
              }
            }
          },
          tooltip: {
            enabled: true,
            callbacks: {
              label: function(context) {
                return `${context.dataset.label}: ${context.parsed.x} kg CO₂`;
              }
            }
          },
          title: {
            display: true,
            text: 'Comparison of Pipe Installation Methods',
            font: {
              size: 18
            }
          }
        },
        scales: {
            x: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'CO₂dfjf Emissions (kg)',
                font: {
                  size: 14
                },
                padding: { top: 20 }, // Adds a little space above the title
                align: 'center', // Centers the title
                rotation: 90 // Rotates the title by 90 degrees
              }
            },
            y: {
              title: {
                display: false
              }
            }
        }
      }
    };
  
    if (divC == "MatchartSection") {
        chartInstanceMaterial = new Chart(ctx, config);
    }
    if (divC == "FreightchartSection") {
        chartInstanceFreight = new Chart(ctx, config);
    }
    if (divC == "MachinerychartSection") {
        chartInstanceMachinary = new Chart(ctx, config);
    }
    if (divC == "TransportchartSection") {
        chartInstanceTransport = new Chart(ctx, config);
    }
  }

  
  // Function to show the charts
  function showAnalysisCharts() {
    const chartDiv = document.getElementById('chartSection');
    chartDiv.style.display = 'flex'; // Make the chart container visible

    // CIPP Data (Example data)
    const cippData = [machCIPP, frCIPP, machCIPP]; // Transport, Freight, Material for CIPP
    drawDonutChart('cippDonutChart', 'CIPP CO₂ Emissions Distribution', cippData);

    // D&L Data (Example data)
    const dlData = [machDL, frDL, machDL]; // Transport, Freight, Material for D&L
    drawDonutChart('dlDonutChart', 'D&L CO₂ Emissions Distribution', dlData);
  }

  const apicost = "https://script.google.com/macros/s/AKfycbxIToRHfu6hCwLSY_wJveor9PZxO4pwVYjkixSIklSJa978mdRb9Q4pt_1P9GWmS2KM/exec";

  async function fetchRate() {
    try {
      const response = await fetch(apicost);
      const text = await response.text();
      const rateStr = text.split("#")[1];
      rate = parseFloat(rateStr);
      let dltot = (matDL+machDL+frDL+transDL);
      let cipptot = (matCIPP+machCIPP+frCIPP+transCIPP);
  
      document.getElementById("todaysRate").textContent = "$"+ rate.toFixed(2);
      document.getElementById("actualCostDL").textContent = "$" + (rate * dltot).toFixed(2);
      document.getElementById("actualCostCIPP").textContent = "$" + (rate * cipptot).toFixed(2);
      generateChart();
  
      // Show the content section
      document.querySelector(".top-section").style.display = "flex";
    } catch (err) {
      console.error("API fetch failed:", err);
      alert("Failed to fetch data.");
    }
  }
  

  function generateChart() {
    const labels = [
      "Material DL", "Material CIPP",
      "Machinery DL", "Machinery CIPP",
      "Freight DL", "Freight CIPP",
      "Transport DL", "Transport CIPP"
    ];
    console.log(rate)
  
    const rawValues = [matDL, matCIPP, machDL, machCIPP, frDL, frCIPP, transDL, transCIPP];
    const scaledValues = rawValues.map(v => v * (rate/1000));
    const maxVal = Math.max(...scaledValues);
  
    const chart = document.getElementById("costChart");
    chart.innerHTML = "";
  
    labels.forEach((label, i) => {
      const value = scaledValues[i];
  
      const bar = document.createElement("div");
      bar.className = "cost-bar";
  
      const fill = document.createElement("div");
      fill.className = "cost-fill";
      fill.style.width = `${(value / maxVal) * 100}%`;
      fill.style.backgroundColor = getColor(i);
      fill.textContent = label;
  
      const tag = document.createElement("div");
      tag.className = "bar-label";
      tag.textContent = `$${value.toFixed(2)} NZD`;
      fill.appendChild(tag);
  
      bar.appendChild(fill);
      chart.appendChild(bar);
    });
  }
  


function getColor(index) {
  const colors = ["#4caf50", "#2196f3", "#ff9800", "#f44336"];
  return colors[index % colors.length];
}

let donutChart1, donutChart2, barChart;

    const createDonutChart = (ctx, data, labels, title) => {
      return new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: labels,
          datasets: [{
            label: title,
            data: data,
            backgroundColor: ['#4bc0c0', '#36a2eb', '#ffcd56', '#ff6384'],
            hoverOffset: 20
          }]
        },
        options: {
          cutout: '40%',
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: title
            },
            legend: {
              position: 'bottom'
            }
          }
        }
      });
    };

    const createBarChart = (ctx, data, labels, title) => {
      return new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: title,
            data: data,
            backgroundColor: ['#36a2eb', '#ffcd56', '#ff6384']
          }]
        },
        options: {
          indexAxis: 'y',
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: title
            },
            legend: {
              display: false
            }
          }
        }
      });
    };

    const renderCharts = () => {
      // Show dashboard on button click
      document.getElementById('dashboard').style.display = 'flex';

      // Destroy previous instances
      if (donutChart1) donutChart1.destroy();
      if (donutChart2) donutChart2.destroy();
      if (barChart) barChart.destroy();

      // Create new charts
      donutChart1 = createDonutChart(
        document.getElementById('metricDonut1'),
        [matDL, machDL, frDL, transDL],
        ['Material', 'Machinery', 'Freights', 'Transportation'],
        'DL Distribution'
      );

      donutChart2 = createDonutChart(
        document.getElementById('metricDonut2'),
        [matCIPP, machCIPP, frCIPP, transCIPP],
        ['Material', 'Machinery', 'Freights', 'Transportation'],
        'CIPP Distribution'
      );

      barChart = createBarChart(
        document.getElementById('horizontalBarComparison'),
        [(matDL+machDL+frDL+transDL),(matCIPP+machCIPP+frCIPP+transCIPP)],
        ['Total CO2 DL', 'Total CO2 CIPP'],
        'Total CO2 Comparison'
      );
    };