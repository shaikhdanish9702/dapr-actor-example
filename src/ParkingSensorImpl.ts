import { AbstractActor } from "@dapr/dapr";
import ParkingSensorInterface from "./ParkingSensorInterface";

export default class ParkingSensorImpl extends AbstractActor implements ParkingSensorInterface {
  async carEnter(): Promise<void> {
    // Implementation that updates state that this parking spaces is occupied.
  }

  async carLeave(): Promise<void> {
    // Implementation that updates state that this parking spaces is available.
  }

  private async getInfo(): Promise<void> {
    // Implementation of requesting an update from the parking space sensor.
  }

  /**
   * @override
   */
  async onActivate(): Promise<void> {
    // Initialization logic called by AbstractActor.
  }
}
