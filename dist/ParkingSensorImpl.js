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
Object.defineProperty(exports, "__esModule", { value: true });
const dapr_1 = require("@dapr/dapr");
class ParkingSensorImpl extends dapr_1.AbstractActor {
    carEnter() {
        return __awaiter(this, void 0, void 0, function* () {
            // Implementation that updates state that this parking spaces is occupied.
        });
    }
    carLeave() {
        return __awaiter(this, void 0, void 0, function* () {
            // Implementation that updates state that this parking spaces is available.
        });
    }
    getInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            // Implementation of requesting an update from the parking space sensor.
        });
    }
    /**
     * @override
     */
    onActivate() {
        return __awaiter(this, void 0, void 0, function* () {
            // Initialization logic called by AbstractActor.
        });
    }
}
exports.default = ParkingSensorImpl;
