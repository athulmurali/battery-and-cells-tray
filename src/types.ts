export type StatusDesc = "Passing" | "Failing";
export type Cells = { [key: string]: Cell };

export interface Cell {
  position?: string;
  cell_serial: string;
  status_code: number;
  status_desc: StatusDesc; // Update status_desc to match the expected type
  hold_cell: boolean;
}

export interface Tray {
  starting_station: string;
  cells: Cells;
}

export interface TrayJSONData {
  [key: string]: Tray;
}

export enum StatusDescEnum {
  Passing = "Passing",
  Failing = "Failing",
  Unknown = "Unknown"
}
