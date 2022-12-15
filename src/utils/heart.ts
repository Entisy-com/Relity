import axios from "axios";
import { HEARTBEAT_URL } from "./constants";

export class Heart {
  static startBeat(id: string, active: boolean) {
    axios.post(`${HEARTBEAT_URL}/heartbeat`, {
      id,
      inactive: !active,
    });

    setInterval(() => {
      axios.post(`${HEARTBEAT_URL}/heartbeat`, {
        id,
        inactive: !active,
      });
    }, 5 * 1000);
  }

  static stopBeat(id: string) {
    axios.post(`${HEARTBEAT_URL}/stopHeartbeat`, {
      id,
    });
  }
}
