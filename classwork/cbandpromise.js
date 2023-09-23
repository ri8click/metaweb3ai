function carMaint() {
    console.log("Task A: Go to Workshop for car Maint");
    var result = new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("Task A: Car fixed");
            resolve("Ur car is Fixed get it");
        }, 3000);
    });
    return result;
}
function doLaundary() {
    console.log("Task C: For Laundary");
    var result = new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("Task C: Dress Done");
            resolve("Get your Dress");
        }, 1000);
    });
    return result;
}
function attendEvent() {
    console.log("Task D: Get Ready for Event");
    var result = new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("Task D: Ready for Event");
            resolve("U can Go to Event");
        }, 2000);
    });
    return result;
}
var getResponse = carMaint();
getResponse
    .then(function (message) {
    console.log("Task A: Response: ", message);
    return doLaundary();
})
    .then(function (message) {
    console.log("Task C: Response: ", message);
    return attendEvent();
})
    .then(function (message) {
    console.log("Task D: Response: ", message);
})
    .catch(function (Error) {
    console.log(Error);
})
    .finally(function () {
    console.log("I m finally and present in end for all cases");
});
setTimeout(function () {
    console.log("Task B: Do Grocery");
}, 1000);
