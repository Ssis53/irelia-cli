#!/usr/bin/env node
/*
 * @Author: xiangfu.wu
 * @Date: 2021-09-01 16:32:39
 * @Description: 🚀
 * @FilePath: /irelia-cli/bin/index.js
 */

const { program } = require('commander'); 
const lib = require('irelia-cli-lib');
console.log(lib)
// console.log('welcome irelia-cli 5153')

program
  .version(require('../package.json').version)
  .command('create <app-name>')
  .description('创建一个小APP')
  .option('-j, --jump', 'integer argument')
  .action((params, opts) => {
    if(opts.jump) {
      console.log('直接创建小app');
    } else {
      console.log('按流程创建APP')
    }
  })

program.parse(process.argv);  

// console.log(program.opts());
