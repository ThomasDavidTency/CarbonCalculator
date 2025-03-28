document.querySelectorAll('.add-machine-btn').forEach(button => {
    button.addEventListener('click', function() {
        const formSection = this.closest('.form-section');

        // Create a new form group for machine name and number of machines
        const newFormGroup = document.createElement('div');
        newFormGroup.classList.add('form-group');
        newFormGroup.innerHTML = `
            <select class="machine-name" required>
                <option value="">Select Machine Name</option>
                <option value="Machine 1">Machine 1</option>
                <option value="Machine 2">Machine 2</option>
                <option value="Machine 3">Machine 3</option>
            </select>
            <input type="number" class="number-of-machines" placeholder="Number of Machines" required>
        `;

        // Create a new form group for fuel type and hours of operation
        const newFormGroup2 = document.createElement('div');
        newFormGroup2.classList.add('form-group');
        newFormGroup2.innerHTML = `
            <select class="fuel-type" required>
                <option value="">Select Fuel Type</option>
                <option value="Diesel">Diesel</option>
                <option value="Gasoline">Gasoline</option>
                <option value="Electric">Electric</option>
            </select>
            <input type="number" class="hours-of-operation" placeholder="Hours of Operation" required>
        `;

        // Create a partition element
        const partition = document.createElement('div');
        partition.classList.add('partition');

        // Append the new form groups and partition to the form section
        formSection.querySelector('form').insertBefore(newFormGroup2, this);
        formSection.querySelector('form').insertBefore(newFormGroup, this);
        formSection.querySelector('form').insertBefore(partition, this);
    });
});

// Function to calculate emissions based on fuel type
function calculateEmissions(formSection) {
    const machineEntries = formSection.querySelectorAll('.form-group');
    let totalEmissions = 0;

    machineEntries.forEach(entry => {
        const machineName = entry.querySelector('.machine-name');
        const numberOfMachines = entry.querySelector('.number-of-machines');
        const fuelType = entry.querySelector('.fuel-type');
        const hoursOfOperation = entry.querySelector('.hours-of-operation');

        // Check if all required fields are present
        if (machineName && numberOfMachines && fuelType && hoursOfOperation) {
            const machineNameValue = machineName.value;
            const numberOfMachinesValue = parseInt(numberOfMachines.value) || 0;
            const fuelTypeValue = fuelType.value;
            const hoursOfOperationValue = parseInt(hoursOfOperation.value) || 0;

            // Emission factors (example values)
            const emissionFactors = {
                'Diesel': 2.68, // kg CO2 per liter
                'Gasoline': 2.31, // kg CO2 per liter
                'Electric': 0.0 // kg CO2 (assuming no emissions for electric)
            };

            // Calculate emissions for this entry
            if (fuelTypeValue in emissionFactors) {
                const emissions = numberOfMachinesValue * hoursOfOperationValue * emissionFactors[fuelTypeValue];
                totalEmissions += emissions;
            }
        }
    });

    return totalEmissions;
}

// Event listener for the Calculate Emission button
document.getElementById('calculate-emission-btn').addEventListener('click', function() {
    const dlMethodSection = document.getElementById('dl-method');
    const cippSection = document.getElementById('cipp');

    const dlEmissions = calculateEmissions(dlMethodSection);
    const cippEmissions = calculateEmissions(cippSection);

    // Display results
    dlMethodSection.querySelector('.emission-result').innerText = `Total Emissions (DL Method): ${dlEmissions.toFixed(2)} kg CO2`;
    cippSection.querySelector('.emission-result').innerText = `Total Emissions (CIPP): ${cippEmissions.toFixed(2)} kg CO2`;
});