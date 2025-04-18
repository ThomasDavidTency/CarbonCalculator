function doGet() {
  var sheetUrl = "https://docs.google.com/spreadsheets/d/1JIn38LguPstYCT2R80_C1iB_joVyCeam2Ki9gJ4l0FE/edit?gid=92430371#gid=92430371";
  var ss = SpreadsheetApp.openByUrl(sheetUrl);
  var MDL_sheet = ss.getSheetByName("Material-D&L");
  var MCIPP_sheet = ss.getSheetByName("Material-CIPP");
  var Mach_sheet = ss.getSheetByName("LISTS-Machinery");
  var Frieght_sheet = ss.getSheetByName("LISTS-Freight");
  var Comm_sheet = ss.getSheetByName("LISTS-Commute");
  
  var ConcreteDia = MDL_sheet.getRange("A49:A63").getValues().flat();
  var ConcreteC02 = MDL_sheet.getRange("M49:M63").getValues().flat();

  var HDPEDia = MDL_sheet.getRange("A71:A88").getValues().flat();
  var HDPEC02 = MDL_sheet.getRange("H71:H88").getValues().flat();

  var PVCeDia = MDL_sheet.getRange("A93:A100").getValues().flat();
  var PVCC02 = MDL_sheet.getRange("H93:H100").getValues().flat();

  var FibreGDia = MCIPP_sheet.getRange("A40:A50").getValues().flat();
  var FGC02 = MCIPP_sheet.getRange("D40:D50").getValues().flat();

  var NeedleFDia = MCIPP_sheet.getRange("A59:A69").getValues().flat();
  var NeedleFCO2 = MCIPP_sheet.getRange("D59:D69").getValues().flat();

  var MachineName = Mach_sheet.getRange("C4:C52").getValues().flat();
  var MachineCons = Mach_sheet.getRange("D4:D52").getValues().flat();

  var FuelName = Mach_sheet.getRange("F4:F16").getValues().flat();
  var FuelC02 = Mach_sheet.getRange("G4:D16").getValues().flat();

  var FrieghtMode = Frieght_sheet.getRange("F4:F22").getValues().flat();
  var FrieghtName = Frieght_sheet.getRange("C4:C13").getValues().flat();
  var FrieghtCO2 = Frieght_sheet.getRange("G4:G22").getValues().flat();

  var CommuteDomName = Comm_sheet.getRange("C4:C24").getValues().flat();
  var CommuteDomFuel = Comm_sheet.getRange("D4:D24").getValues().flat();

  var CommuteAirName = Comm_sheet.getRange("F4:F5").getValues().flat();
  var CommuteAirFuel = Comm_sheet.getRange("G4:G5").getValues().flat();

  var CommutePubName = Comm_sheet.getRange("I4:I12").getValues().flat();
  var CommutePubFuel = Comm_sheet.getRange("J4:J12").getValues().flat();

  
  var ConcreteData = ConcreteDia.map((name, index) => ({
    name: name,
    value: ConcreteC02[index]
  }));
  
   var HDPEData = HDPEDia.map((name, index) => ({
    name: name,
    value: HDPEC02[index]
  }));

  var PVCData = PVCeDia.map((name, index) => ({
    name: name,
    value: PVCC02[index]
  }));

  var FibreGData = FibreGDia.map((name, index) => ({
    name: name,
    value: FGC02[index]
  }));
  
   var NFData = NeedleFDia.map((name, index) => ({
    name: name,
    value: NeedleFCO2[index]
  }));

    var MachineData = MachineName.map((name, index) => ({
    name: name,
    Consumption: MachineCons[index]
  }));
  
   var FuelData = FuelName.map((name, index) => ({
    name: name,
    CO2Emm: FuelC02[index]
  }));

  var FrieghtData = FrieghtMode.map((name, index) => ({
    name: name,
    CO2Emm: FrieghtCO2[index]
  }));

  var FrieghtName_ = FrieghtName.map((name, index) => ({
    name: name,
  }));



  var CommDomData = CommuteDomName.map((name, index) => ({
    name: name,
    co2: CommuteDomFuel[index]
  }));
  
  var CommAirData = CommuteAirName.map((name, index) => ({
    name: name,
    co2: CommuteAirFuel[index]
  }));
  
  var CommPubData = CommutePubName.map((name, index) => ({
    name: name,
    co2: CommutePubFuel[index]
  }));

  
  function extractColumns(data, cols) {
    return data.map(row => ({
      column1: row[cols[0]],
      column2: row[cols[1]]
    }));
  }
  
  var jsonData = {
    Concrete: ConcreteData,
    HDPE: HDPEData,
    PVC: PVCData,
    FibreGlass: FibreGData,
    Needlefelt: NFData,
    Machine: MachineData,
    Fuel: FuelData,
    Frieght: FrieghtData,
    FrieghtOpt:FrieghtName_,
    CommDom: CommDomData,
    CommAir: CommAirData,
    CommPub: CommPubData
  };

  
  var output = ContentService.createTextOutput(JSON.stringify(jsonData));
  output.setMimeType(ContentService.MimeType.JSON);
  Logger.log(jsonData)
  return output;
}
