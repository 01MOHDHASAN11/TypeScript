// Interface in TypeScript
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.start = function () {
        console.log("Car starts");
    };
    Car.prototype.stop = function () {
        console.log("Car stops");
    };
    return Car;
}());
var myCar = new Car();
// myCar.start()
myCar.stop();
