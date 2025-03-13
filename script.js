
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

// Function to calculate emissions for D&L Method
document.getElementById('dlForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const materialType = document.getElementById('materialTypeDL').value;
    const nominalDiameter = document.getElementById('nominalDiameterDL').value;
    const length = parseFloat(document.getElementById('lengthDL').value);
    const depth = parseFloat(document.getElementById('depthDL').value);

    let totalCarbonEmission = 0;
    let resultMessage = '';

    if (materialType === "Concrete") {
        const pipeInfo = concreteData[nominalDiameter];

        if (pipeInfo) {
            totalCarbonEmission = (pipeInfo.carbonConcrete + pipeInfo.asphaltCO2 + pipeInfo.aggregateCO2) * length; // kgCO2e

            resultMessage = `
                <h2>Total Carbon Emission (D&L Method)</h2>
                <p>For a pipe with nominal diameter ${nominalDiameter}, length ${length} m, and depth ${depth} mm:</p>
                <p><strong>Total Carbon Emission: ${totalCarbonEmission.toFixed(2)} kgCO2e</strong></p>
            `;
        } else {
            resultMessage = `<p>Error: Invalid Nominal Diameter selected for Concrete.</p>`;
        }
    } else if (materialType === "HDPE") {
        const pipeInfo = hdpeData[nominalDiameter];

        if (pipeInfo) {
            totalCarbonEmission = (pipeInfo.aggregateCO2 + pipeInfo.totalEmbodiedCarbon + pipeInfo.asphaltCO2) * length; // kgCO2e

            resultMessage = `
                <h2>Total Carbon Emission (D&L Method)</h2>
                <p>For a pipe with nominal diameter ${nominalDiameter}, length ${length} m, and depth ${depth} mm:</p>
                <p><strong>Total Carbon Emission: ${totalCarbonEmission.toFixed(2)} kgCO2e</strong></p>
            `;
        } else {
            resultMessage = `<p>Error: Invalid Nominal Diameter selected for HDPE.</p>`;
        }
    }

    document.getElementById('resultDL').innerHTML = resultMessage;
});

// Function to calculate emissions for CIPP
document.getElementById('cippForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nominalDiameter = document.getElementById('nominalDiameterCIPP').value;
    const length = parseFloat(document.getElementById('lengthDL').value);
    const depth = parseFloat(document.getElementById('depthDL').value);
    const liningMaterial = document.getElementById('liningMaterialCIPP').value;

    let totalCarbonEmission = 0;
    let resultMessage = '';

    // Calculate emissions based on the selected lining material
    if (liningMaterial === "Generic - Fiberglass + PE Resin") {
        const co2PerMeter = fiberglassData[nominalDiameter];

        if (co2PerMeter) {
            totalCarbonEmission = co2PerMeter * length; // kgCO2e

            resultMessage = `
                <h2>Total Carbon Emission (CIPP - Fiberglass)</h2>
                <p>For a pipe with nominal diameter ${nominalDiameter}, length ${length} m, and depth ${depth} mm:</p>
                <p><strong>Total Carbon Emission: ${totalCarbonEmission.toFixed(2)} kgCO2e</strong></p>
            `;
        } else {
            resultMessage = `<p>Error: Invalid Nominal Diameter selected for Fiberglass.</p>`;
        }
    } else if (liningMaterial === "Generic - Needle Felt + PE Resin") {
        const co2PerMeter = needleFeltData[nominalDiameter];

        if (co2PerMeter) {
            totalCarbonEmission = co2PerMeter * length; // kgCO2e

            resultMessage = `
                <h2>Total Carbon Emission (CIPP - Needle Felt)</h2>
                <p>For a pipe with nominal diameter ${nominalDiameter}, length ${length} m, and depth ${depth} mm:</p>
                <p><strong>Total Carbon Emission: ${totalCarbonEmission.toFixed(2)} kgCO2e</strong></p>
            `;
        } else {
            resultMessage = `<p>Error: Invalid Nominal Diameter selected for Needle Felt.</p>`;
        }
    }

    document.getElementById('resultCIPP').innerHTML = resultMessage;
    // Add a class to the body when the page is fully loaded
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
})
});

