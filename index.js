#!/usr/bin/env node

const { Command } = require("commander");
require("dotenv").config();
const fs = require("fs");
const program = new Command();

program
  .version("1.0.3")
  .description("CLI tool for working with environment variables [env]");

program
  .command("get <name>")
  .description("Get the value of a variable")
  .action((name) => {
    const value = process.env[name];
    if (value) {
      console.log(`${name} = ${value}`);
    } else {
      console.log("Environment variable not found");
    }
  });

program
  .command("set <name> <value>")
  .description("Set the value of a variable")
  .action((name, value) => {
    
    const envContent = fs.readFileSync(".env", "utf-8");

    if (envContent.includes(`${name}=`)) {
      console.error(
        `Error: Variable '${name}' already exists in the .env file.`
      );
    } else {
      process.env[name] = value;
      fs.writeFileSync(".env", `\n${name}=${value}`, { flag: "a" });
      console.log(`${name} = ${value}`);
    }
  });

program
  .command("del <name>")
  .description("Delete an environment variable")
  .action((name) => {
    const value = process.env[name];

    if (value !== undefined) {

      delete process.env[name];
      const envContent = fs.readFileSync('.env', 'utf-8');
      const updatedEnvContent = envContent
        .split('\n')
        .filter(line => !line.startsWith(`${name}=`))
        .join('\n');
      fs.writeFileSync('.env', updatedEnvContent);
      console.log(`${name} deleted.`);
    } else {
      console.log(`Environment variable ${name} does not exist.`);
    }
  });


program.parse(process.argv);
