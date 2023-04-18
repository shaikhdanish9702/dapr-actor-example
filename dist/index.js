"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dapr_1 = require("@dapr/dapr");
const ParkingSensorImpl_1 = __importDefault(require("./ParkingSensorImpl"));
const daprHost = "127.0.0.1";
const daprPort = "50000";
const serverHost = "127.0.0.1";
const serverPort = "50001";
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        const server = new dapr_1.DaprServer(serverHost, serverPort, daprHost, daprPort);
        yield server.actor.init(); // Let the server know we need actors
        server.actor.registerActor(ParkingSensorImpl_1.default); // Register the actor
        yield server.start(); // Start the server
        // To get the registered actors, you can invoke `getRegisteredActors`:
        const resRegisteredActors = yield server.actor.getRegisteredActors();
        console.log(`Registered Actors: ${JSON.stringify(resRegisteredActors)}`);
    });
}
