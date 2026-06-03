#!/usr/bin/env node
import { Command } from "commander";
import addTask from "./commands/add.js";
import listTasks from "./commands/list.js";
import handleErrors from "./error/handleErrors.js";
import updateTask from "./commands/update.js";
import deleteTask from "./commands/delete.js";
import markInProgress from "./commands/markInProgress.js";
import markDone from "./commands/markDone.js";
import listTasksDone from "./commands/listDone.js";
import listTasksInProgress from "./commands/listInProgress.js";
import listTasksToDo from "./commands/listToDo.js";
import markToDo from "./commands/markToDo.js";

const program = new Command();

program.version("0.0.1");

program
  .command("add")
  .argument("<description>")
  .action(async (description) => {
    try {
      await addTask(description);
    } catch (e) {
      handleErrors(e);
    }
  });

program
  .command("list")
  .action(async () => {
    try {
      const tasks = await listTasks();
      console.log(tasks);
    } catch (e) {
      handleErrors(e);
    }
  });

program
  .command("list-in-progress")
  .action(async () => {
    try {
      const tasksInProgress = await listTasksInProgress();
      console.log(tasksInProgress);
    } catch (e) {
      handleErrors(e);
    }
  });

program
  .command("list-done")
  .action(async () => {
    try {
      const tasksDone = await listTasksDone();
      console.log(tasksDone);
    } catch (e) {
      handleErrors(e);
    }
  });

program
  .command("list-todo")
  .action(async () => {
    try {
      const tasksToDo = await listTasksToDo();
      console.log(tasksToDo);
    } catch (e) {
      handleErrors(e);
    }
  });

program
  .command("update")
  .argument("<id>")
  .argument("<description>")
  .action(async (id, description) => {
    try {
      await updateTask(id, description);
      console.log("Task updated successfully!");
    } catch (e) {
      handleErrors(e);
    }
  });

program
  .command("delete")
  .argument("<id>")
  .action(async (id) => {
    try {
      await deleteTask(id);
      console.log("Task deleted successfully!");
    } catch (e) {
      handleErrors(e);
    }
  });

program
  .command("mark-todo")
  .argument("<id>")
  .action(async (id) => {
    try {
      await markToDo(id);
      console.log("Task marked as 'todo'.");
    } catch (e) {
      handleErrors(e);
    }
  });

program
  .command("mark-in-progress")
  .argument("<id>")
  .action(async (id) => {
    try {
      await markInProgress(id);
      console.log("Task marked as 'in progess'.");
    } catch (e) {
      handleErrors(e);
    }
  });

program
  .command("mark-done")
  .argument("<id>")
  .action(async (id) => {
    try {
      await markDone(id);
      console.log("Task marked as 'done'.");
    } catch (e) {
      handleErrors(e);
    }
  });

program.parseAsync();