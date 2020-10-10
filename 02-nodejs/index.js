/*
0. Obter um usuário
1. Obter número de telefone a partir do seu ID
2. Obter o endereço do usuário pelo ID
*/

function getUser(callback) {
  setTimeout(() => {
    return callback(null, {
      id: 1,
      name: "Aladin",
      birth: new Date(),
    });
  }, 1000);
}

function getPhone(idUser, callback) {
  setTimeout(() => {
    return callback(null, {
      phone: "9999 8888",
      ddd: 88,
    });
  }, 2000);
}

function getAddress(idUser, callback) {
  setTimeout(() => {
    return callback(null, {
      street: "Street One",
      number: 0,
    });
  }, 2000);
}

function resolveUser(error, user) {
  console.log("user", user);
}

getUser(function resolveUser(error, user) {
  if (error) {
    console.error("DEU RUIM em USER", error);
    return;
  }
  getPhone(user.id, function resolvePhone(error1, phone) {
    if (error1) {
      console.error("DEU RUIM em PHONE", error1);
      return;
    }
    getAddress(user.id, function resolveAddress(error2, address) {
      if (error2) {
        console.error("DEU RUIM em ADDRESS", error2);
        return;
      }
      console.log(`{
        "user": [
            name: ${user.name},
            address: ${address.street}, nº ${address.number},
            phone: (${phone.ddd}) ${phone.phone}
        ]
      }`);
    });
  });
});
