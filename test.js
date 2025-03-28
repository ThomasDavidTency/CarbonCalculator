// Function to fetch and parse data
async function fetchData(url) {
    try {
        let response = await fetch(url); // Execute HTTP request
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        let data = await response.json(); // Parse JSON response
        console.log("Parsed Data:", data); // Print the parsed data
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Example API call
fetchData("https://script.google.com/macros/s/AKfycby-_Hl9AtdtjBmRXll8XkKK4LpdVCQwEyavAxL3yvoMEKaEAWx2_eP-jfu-nTa821uz/exec");