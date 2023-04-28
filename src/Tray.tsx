import { colHeads, getOperationalPercentage, rowHeads } from "./apiClient";
import { Cell } from "./Cell";
import { styles } from "./styles";
import { Itray } from "./TrayList";

//Move the following to types
export interface ITrayStatus {
  percentage: number;
}
export function TrayStatus({ percentage }: ITrayStatus) {
  if (percentage < 40) {
    return <span>Bad</span>;
  } else if (percentage <= 60) {
    // Needs attention
    return <span>Check</span>;
  } else {
    return <span>Good</span>;
  }
}
export function TrayBody() {
  return (
    <div style={styles.trayBody}>
      <table style={styles.cellTable}>
        <thead>
          <th>row</th>
          <>
            {colHeads.map((ch) => (
              <th>{ch}</th>
            ))}
          </>
        </thead>
        <tbody />
        <>
          {rowHeads.map((rH) => (
            <tr>
              <th>{rH}</th>
              <>
                {colHeads.map((_) => (
                  <td style={styles.td}>
                    <Cell />
                  </td>
                ))}
              </>
            </tr>
          ))}
        </>
      </table>
    </div>
  );
}
export function Tray({ trayId, onClickHandler, isActive }: Itray) {
  return (
    <div>
      {/* Tray header */}
      <div
        onClick={() => onClickHandler(trayId)}
        style={isActive ? styles.trayActive : styles.tray}
      >
        <span>{trayId} </span>
        <TrayStatus percentage={getOperationalPercentage()} />
      </div>
      {/* TrayBody */}
      {isActive && <TrayBody />}
    </div>
  );
}
