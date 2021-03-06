import { Component } from "@angular/core";

import * as XLSX from "xlsx";

type AOA = any[][];

@Component({
  selector: "app-excel",
  templateUrl: "./sheet.component.html",
  styleUrls: ["./app.component.css"]
})
export class ExcelComponent {
  data: AOA = null;
  wopts: XLSX.WritingOptions = { bookType: "xlsx", type: "array" };

  onFileChange(evt: any) {
    /*ready file reader */
    const target: DataTransfer = <DataTransfer>evt.target;
    if (target.files.length !== 1) throw new Error("Cannot use multiple files");
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      /* read file */
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: "binary" });

      /* grab first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      /* save data as a json*/
      this.data = <AOA>XLSX.utils.sheet_to_json(ws, { header: 1 });
      console.log(this.data);
    };
    reader.readAsBinaryString(target.files[0]);
  }
}
