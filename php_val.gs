function doGet() {
  var url = "https://carboncredits.com/wp-content/themes/fetchcarbonprices.php";
  var response = UrlFetchApp.fetch(url, { muteHttpExceptions: true });

  var now = new Date();
  var formattedTime = now.toLocaleString();
  // Logger.log("Current Time: " + formattedTime);
  
  if (response.getResponseCode() !== 200) {
    return ContentService.createTextOutput("Error fetching data").setMimeType(ContentService.MimeType.TEXT);
  }
  
  try {
    var textData = response.getContentText();
    var lines = textData.split("\n");
    // Logger.log(lines)
    
    for (var i = 0; i < lines.length; i++) {
      if (lines[i].includes("New Zealand (NZD)")) {
        var values = lines[i].split(",");
        var nzdValue = values[1].replace(/[^0-9.]/g, ""); // Extract numeric value
        // var jsonData = {
        //   Date: formattedTime, 
        //   NZD_Value: nzdValue
        //   }
          var newVar = formattedTime + "#" + nzdValue;
          Logger.log(newVar);
          // Logger.log(jsonData)
          var output = ContentService.createTextOutput(JSON.stringify(newVar));
          Logger.log(output)
          output.setMimeType(ContentService.MimeType.JSON);
          
          return output;
      }
    }
    
    return ContentService.createTextOutput("NZD value not found").setMimeType(ContentService.MimeType.TEXT);
  } catch (error) {
    return ContentService.createTextOutput("Error parsing data").setMimeType(ContentService.MimeType.TEXT);
  }
}
