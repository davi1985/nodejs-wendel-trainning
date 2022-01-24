// module intern form node.js
const util = require("util");
/*
Objectives:
0. Get user;
1. Get phone number by user id;
2. Get address by user id;
*/

function getUser() {
  // error -> reject
  // sucess -> resolve
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve({
        id: 1,
        name: "Aladin",
        birth: new Date(),
      });
    }, 1000);
  });
}

function getPhone(idUser) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve({
        phone: "9999 8888",
        ddd: 88,
      });
    }, 2000);
  });
}

function getAddress(idUser, callback) {
  setTimeout(() => {
    return callback(null, {
      street: "Street One",
      number: 0,
    });
  }, 2000);
}

const getAddressAsync = util.promisify(getAddress);

main();

async function main() {
  try {
    console.time("promise-time");
    const user = await getUser();

    const result = await Promise.all([
      getPhone(user.id),
      getAddressAsync(user.id),
    ]);

    const phone = result[0];
    const address = result[1];

    console.log(`
      Name: ${user.name}
      Address: ${address.street}, nº ${address.number}
      Phone: (${phone.ddd}) ${phone.phone}
    `);
    console.timeEnd("promise-time");
  } catch (error) {
    console.error("DEU RUIM", error);
  }
}

// // convert callback function to promise

// // to manipulate sucess -> .then
// // to manipulate error -> .catch
// const userPromise = getUser();

// userPromise
//   .then((user) => {
//     return getPhone(user.id).then((result) => {
//       return {
//         user: {
//           id: user.id,
//           name: user.name,
//         },
//         phone: result,
//       };
//     });
//   })
//   .then((result) => {
//     const address = getAddressAsync(result.user.id);

//     return address.then((address) => {
//       return {
//         user: result.user,
//         phone: result.phone,
//         address: address,
//       };
//     });
//   })
//   .then((result) => {
//     console.log(`
//       Name: ${result.user.name}
//       Address: ${result.address.street}, nº ${result.address.number}
//       Phone: (${result.phone.ddd}) ${result.phone.phone}`);
//   })
//   .catch((error) => {
//     console.error("DEU RUIM", error);
//   });
