#!/usr/bin/env node
import getUserName from '../src/fn/cli.js';

const userName = [];

console.log('Welcome to the Brain Games!');
userName.push(getUserName());
console.log(`Hello, ${userName.at(-1)}!`);
