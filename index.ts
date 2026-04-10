let a: unknown

a = 'hi'

if ((typeof a) === "string")
    console.log(a.toUpperCase())


// Inline object typing
// function printUser(user: { name: string; age: number }) {
//   console.log(user.name);
// }

// // Interface
// interface User {
//   id: number;
//   name: string;
//   email?: string; // optional
//   readonly createdAt: Date; // can't be changed after creation
// }

// // Type alias — very similar to interface
// type Product = {
//   id: number;
//   name: string;
//   price: number;
// };

// // Extending interfaces
// interface Admin extends User {
//   permissions: string[];
// }

// // Intersection types (& combines)
// type AdminProduct = User & Product;



// any — avoid unless migrating JS
// let danger: any = "hello";

// danger.toUpperCase(); // no error — but what if it was a number?
// danger.nonExistentMethod(); // still no error, scary

// // unknown — safe alternative
// let safe: unknown = "hello";

// // safe.toUpperCase(); // ERROR! must check type first

// if (typeof safe === "string") {
//   safe.toUpperCase(); // now it's fine
// }

// // void and never
// function logMessage(msg: string): void {
//   console.log(msg); // returns nothing
// }

// function crash(error: string): never {
//   throw new Error(error); // never returns
// }