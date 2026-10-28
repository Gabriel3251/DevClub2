const name = "Gabriel";
const age = 18;
const adress = "Rua das Flores, 123";

let gabriel = {
    name: "Gabriel",
    age: null,
    adress: {
        street: "Rua das Flores",
        number: 123,
        city: "São Paulo",
        state: "SP"
    }
}



let users = [
    {name: "Gabriel", age: 18},
    {name: "lorena", age: 16}
]

users[0].age = 19;
console.log(users[0]); // Output: 19
