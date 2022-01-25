const commander = require("commander");
const Hero = require("./Hero");
const Database = require("./database");

async function main() {
  commander
    .version("v1")
    .option("-n, --name [value]", "adicionar nome")
    .option("-p, --power [value]", "adicionar poder")
    //CRUD
    .option("-c, --register", "cadastrar Heroi")
    .option("-r, --list [value]", "listar herois pelo id")
    .option("-u, --update [value]", "atualizar heroi pelo id")
    .option("-d, --remove [value]", "remover heroi pelo id")
    .parse(process.argv);

  const hero = new Hero(commander);
  try {
    if (commander.register) {
      await Database.register(hero);

      console.log("item cadastrado com sucesso!");

      return;
    }

    if (commander.list) {
      const id = commander.list;

      const result = await Database.list(id);

      console.log(result);

      return;
    }

    if (commander.update) {
      const id = commander.update;

      console.log("id", id);

      await Database.update(id, hero);

      console.log("item atualizado com sucesso!");

      return;
    }

    if (commander.remove) {
      const id = commander.remove;

      await Database.remove(id);

      console.log("item removido com sucesso!");
      return;
    }
  } catch (error) {
    console.error("DEU RUIM", error);
    return;
  }
}

main();
