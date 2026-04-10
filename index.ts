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

