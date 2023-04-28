import { useState } from "react";
import { getTrayIds } from "./apiClient";
import { Tray } from "./Tray";

export interface Itray {
  trayId: string;
  onClickHandler: Function;
  isActive: boolean;
}

export function TrayList() {
  const [activeId, setActiveId] = useState<string>("");
  const trays = getTrayIds();
  return (
    <div>
      <h1>TrayList</h1>
      {trays.map((trayId: string) => (
        <Tray
          trayId={trayId}
          isActive={trayId === activeId}
          onClickHandler={() => {
            setActiveId(trayId);
          }}
        />
      ))}
    </div>
  );
}
