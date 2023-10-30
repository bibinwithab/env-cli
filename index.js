#!/usr/bin/env node

const { Command } = require('commander');
require('dotenv').config();
const fs = require('fs');
const program = new Command();

program
  .version('1.0.0')
  .description('CLI tool for working with environment variables');

program
    .command('get <name>')
    .description('Get the value of a variable')
    .action((name) => {
        const value = process.env[name];
        if (value) {
            console.log(`${name} = ${value}`);
        } else {
            console.log('Environment variable not found');
        }
    });

program
    .command('set <name> <value>')
    .description('Set the value of a variable')
    .action((name, value) => {
        process.env[name] = value;
        fs.writeFileSync('.env', `\n${name} = ${value}`, {flag: 'a'})
        console.log(`Environment variable ${name} set`)
    });

program
    .command('del <name>')
    .description('Delete an environment variable')
    .action((name) => {
        const value = process.env[name];
      if (value) {
        delete value;
        fs.writeFileSync('.env', `\n${name}=`, { flag: 'a' });
        console.log(`${name} deleted.`);
      } else {
        console.log(`Environment variable ${name} does not exist.`);
      }
    });
  

program.parse(process.argv);