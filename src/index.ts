import { DaprServer } from "@dapr/dapr";
import ParkingSensorImpl from "./ParkingSensorImpl";

const daprHost = "127.0.0.1";
const daprPort = "50000";
const serverHost = "127.0.0.1";
const serverPort = "50001";
async function start() { 
const server = new DaprServer(serverHost, serverPort, daprHost, daprPort);

await server.actor.init(); 
server.actor.registerActor(ParkingSensorImpl);
await server.start(); 

const resRegisteredActors = await server.actor.getRegisteredActors();
console.log(`Registered Actors: ${JSON.stringify(resRegisteredActors)}`);
}