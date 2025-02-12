// UNION
var user = {
    name: "Mohd Hasan",
    email: "01mohdhasan11@gmail.com",
    age: 24
};
function greetUser(profile) {
    return "Hi I am ".concat(profile.name, ". My age is ").concat(profile.age, " and my email is ").concat(profile.email);
}
console.log(greetUser(user));
