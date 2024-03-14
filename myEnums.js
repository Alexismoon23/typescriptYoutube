"use strict";
var SeatChoice;
(function (SeatChoice) {
    SeatChoice["AISLE"] = "AISLE";
    SeatChoice[SeatChoice["MIDDLE"] = 3] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 4] = "WINDOW";
    SeatChoice[SeatChoice["FOURTH"] = 0] = "FOURTH";
})(SeatChoice || (SeatChoice = {}));
const hcSeat = SeatChoice.AISLE;
