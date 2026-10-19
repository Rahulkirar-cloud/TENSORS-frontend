import { useEffect, useRef, useState } from "react";

import "@univerjs/sheets/facade";
import "@univerjs/sheets-ui/facade";

import {
  createUniver,
  LocaleType,
  mergeLocales,
} from "@univerjs/presets";

import {
  UniverSheetsCorePreset,
} from "@univerjs/preset-sheets-core";

import UniverPresetSheetsCoreEnUS from
  "@univerjs/preset-sheets-core/locales/en-US";

import "@univerjs/preset-sheets-core/lib/index.css";


export default function Subjects() {

  const containerRef = useRef(null);
  const univerAPIRef = useRef(null);

  // Store spreadsheet data in a React variable
  const [sheetData, setSheetData] = useState([]);

  const handlesave = () => {
    const univerAPI = univerAPIRef.current;

    if (!univerAPI) {
      console.log("Spreadsheet is not ready yet");
      return;
    }

    const workbook = univerAPI.getActiveWorkbook();
    const worksheet = workbook?.getActiveSheet();

    if (!worksheet) {
      console.log("No active worksheet found");
      return;
    }

    // Read all cells in the worksheet's data range
    const values = worksheet.getDataRange().getValues();

    // Remove rows that are completely empty
    const cleanedData = values.filter((row) =>
      row.some((cell) => cell !== null && cell !== "")
    );

    // Store the spreadsheet values in a variable
    setSheetData(cleanedData);

    console.log("Spreadsheet data:", cleanedData);
  };


  useEffect(() => {
    const host = containerRef.current;
    if (!host) {
      return;
    }
    const container = document.createElement("div");

    container.style.width = "100%";
    container.style.height = "100%";

    host.appendChild(container);


    // =========================================
    // 3. Create Univer
    // =========================================

    const { univer, univerAPI } = createUniver({

      locale: LocaleType.EN_US,

      locales: {
        [LocaleType.EN_US]: mergeLocales(
          UniverPresetSheetsCoreEnUS
        ),
      },

      presets: [
        UniverSheetsCorePreset({
          container: container,
          formulaBar: false,
          ribbonType: "collapsed"
        }),
      ],

    });


    // =========================================
    // 4. Create Workbook
    // =========================================

    const workbook = univerAPI.createWorkbook({
      name: "Subjects",

    });


    // =========================================
    // 5. Get Active Sheet
    // =========================================

    const sheet = workbook.getActiveSheet();

    sheet?.setRowCount(50);
    sheet?.setColumnCount(10);

    // =========================================
    // 6. Default Headers
    // =========================================

    const headers = [
      "Department_name",
      "City",
      "Email_id",
    ];


    // =========================================
    // 7. Set Headers + Formatting
    // =========================================

    headers.forEach((header, columnIndex) => {

      // Get header cell
      const headerCell = sheet.getRange(
        0,
        columnIndex
      );

      // Set header value
      headerCell.setValue(header);

      // Header font formatting
      headerCell
        .setFontSize(14)
        .setFontWeight("bold")
        .setHorizontalAlignment("center")
        .setFontColor('#03306b')

      // Column width
      const width = Math.max(
        header.length * 12 + 30,
        100
      );

      sheet.setColumnWidth(
        columnIndex,
        width
      );

    });


    // =========================================
    // 8. Cleanup
    // =========================================
    // Make the API available to the Save button
    univerAPIRef.current = univerAPI;
    return () => {
      setTimeout(() => {

        univer.dispose();

        if (container.parentNode) {
          container.parentNode.removeChild(container);
        }

        sheet.current = null;

      }, 0);
    };
  }, []);



  // =========================================
  // 9. Render
  // =========================================

  return (
    <div className="container overflow-scroll mx-auto my-4 p-6 rounded-2xl shadow-2xl bg-linear-to-br from-blue-50 via-white to-indigo-100 font-['Times_New_Roman']">
      <div className="m-4 min-[460px]:flex justify-between">
        <div> <h1 className="text-3xl font-bold text-blue-900">Subjects , Courses and Department</h1>
          <p className="text-xl text-gray-500 mt-1">Enter a subject details of your timetable.</p></div>

        <button
          type="button"
          onClick={handlesave}
          className="px-10 h-12 text-xl flex-wrap rounded-lg bg-blue-900
                   text-white font-semibold hover:bg-blue-700
                   transition duration-200"
        >
          Save
        </button>
      </div>
      <div
        ref={containerRef}
        style={{
          width: "100%",
          height: "700px",
        }}
      >
        <p className="mt-2 mb-2 font-semibold p-3 rounded-xl text-xl bg-blue-50">
          Retrieved rows: {sheetData.length}
        </p>
      </div>
    </div>


  );

}