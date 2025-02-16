// Type guards in TypeScript are a way to narrow down the type of a variable within a specific block of code. They are particularly useful when working with union types, where a variable can be one of several types. Type guards allow you to write more type-safe code by ensuring that the correct operations are performed on the variable based on its type.
function operate(vehicle) {
    if ("drive" in vehicle) {
        vehicle.drive();
    }
    else {
        vehicle.load();
    }
}
var myCar = { drive: function () { console.log("Driving"); } };
var myTruck = { load: function () { console.log("Loading"); } };
operate(myCar);
operate(myTruck);
