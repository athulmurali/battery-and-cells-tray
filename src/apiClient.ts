import data from "./data.json";
import { parsedData } from "./data";
export const colHeads = ["01", "02", "03", "04", "05", "06", "07", "08", "09"];
export const rowHeads = ["A", "B", "C", "D", "E", "F", "G", "H"];
export const getTrayIds = () => Object.keys(data);

export const genCellLoc = (rowName: string, colName: string) => {
  return rowName + "" + colName;
};
export const getCellGrid = (trayId: string) => {
  parsedData;
};
export function getOperationalPercentage() {
  return 40;
}
// const testData: TrayJSONData = {
//   "TR:1234-5": {
//     starting_station: "station-01",
//     cells: {
//       A01: {
//         cell_serial: "P1C065K",
//         status_code: 98,
//         status_desc: "Passing",
//         hold_cell: false
//       }
//     }
//   }
// };
