#!/usr/bin/env node
import { Command } from "commander";
import addTarefa from "./commands/add.js";
import listaTarefas from "./commands/list.js";
import trataErros from "./erro/trataErros.js";
import atualizaTarefa from "./commands/update.js";
import removeTarefa from "./commands/delete.js";

const program = new Command();

program.version("0.0.1");

program
  .command("add")
  .argument("<descricao>")
  .action(async (descricao) => {
    try {
      await addTarefa(descricao);
    } catch (e) {
      trataErros(e);
    }
  });

program
  .command("list")
  .action(async () => {
    try {
      const tarefas = await listaTarefas();
      console.log(tarefas);
    } catch (e) {
      trataErros(e);
    }
  });

program
  .command("update")
  .argument("<id>")
  .argument("<descricao>")
  .action(async (id, descricao) => {
    try {
      await atualizaTarefa(id, descricao);
    } catch (e) {
      trataErros(e);
    }
  });

program
  .command("delete")
  .argument("<id>")
  .action( async (id) => {
    await removeTarefa(id);
  });

program.parseAsync();