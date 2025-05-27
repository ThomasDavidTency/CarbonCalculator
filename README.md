# Carbon Calculator

A lightweight web-based tool for calculating carbon costs using real-time pricing and dynamic material data from Google Sheets. This project combines static HTML/JS assets with Google Apps Script Web Apps for a fully serverless and extensible solution.

## How Components Work Together

### `index.html`
- Serves as the landing page.
- Redirects or links to `materials.html`, which hosts the main carbon calculator interface.

### `materials.html`
- Loads `scripts.js` to enable dynamic features and backend communication.
- Provides the user interface for material selection and carbon calculation.

### `scripts.js`
- Handles all client-side logic and API calls.
- **`fetchData()`**: Fetches and parses data from a Google Apps Script Web App that reads from a public Google Sheet (`test_file.xlsr`).
- **`fetchRate()`**: Retrieves real-time carbon pricing rates from a carbon cost website through another Google Apps Script Web App.

### Google Apps Script Backends
- **Script 1**: Reads data from the uploaded Google Sheet.
- **Script 2**: Contacts an external API to fetch current carbon pricing.
- Both scripts are deployed separately as Web Apps, allowing public access and integration with the frontend JavaScript.

---

## How to Duplicate This Project

### 1. Upload Files
- Upload the entire project folder (HTML, JS, etc.) to your destination domain or server directory.

### 2. Setup the Google Sheet
- Upload `test_file.xlsr` to your Google Drive.
- Set the file sharing permissions to **"Anyone with the link can view"**.

### 3. Create Google Apps Script Projects
- Create **two** separate Google Apps Script projects in Google Drive.
- For each, paste in the provided `.gs` code (not included here—see the project scripts).
- Deploy **both** projects as Web Apps:
  - Set **"Execute the app as"** to: **Me**
  - Set **"Who has access"** to: **Anyone**
- After deploying, copy the Web App URLs for both scripts.

### 4. Edit `scripts.js`
- In your local `scripts.js` file, replace the placeholder URLs or deployment IDs with your actual deployed Web App URLs.

---

## Notes
- No backend server is required; all logic is handled client-side and via Google Apps Script.
- You can expand or customize the carbon pricing logic or data source by modifying the corresponding Apps Script projects.
- Ensure your Google Sheet and Apps Script permissions are set for public access if you want the calculator to work for all users.

---

## License
MIT License (or specify your own license here).
