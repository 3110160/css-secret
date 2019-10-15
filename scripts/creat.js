const shell = require('shelljs');
const inquirer = require('inquirer');
const path = require('path')

inquirer
  .prompt([{
    type: 'input',
    name: 'dirname',
    message: 'input the name to created',
    default: false
  }])
  .then(answers => {
    const {dirname} = answers;
    const dirpath = path.resolve(__dirname,'..','src/pages/demos');
    shell.cd(dirpath);
    shell.mkdir('-p',dirname);
    shell.cp('-R', path.resolve(__dirname,'pageTemplate/*'), `${dirpath}/${dirname}`);//复制
    shell.sed('-i', 'demoname', dirname, `${dirpath}/${dirname}/index.vue`);
    console.log(`\n see the new page: http://localhost:8080/css/${dirname} \n`)
  });