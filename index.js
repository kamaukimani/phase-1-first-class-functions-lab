const returnFirstTwoDrivers = function (drivers) {
   // let drivers = ["Antonia", "Nuru", "Amari", "Mo"];
    return drivers.slice(0,2);
};

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
}
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(anInteger) {

return function (fare) {
    return fare * anInteger;
}
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, driverFunction) {
    return driverFunction(drivers);
}