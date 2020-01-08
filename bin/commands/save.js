'use strict';

const args = require('../../src/args');
const save = require('../../src/save');

module.exports.command = 'save';

module.exports.describe = 'save old blueprint state';

module.exports.builder = {
  blueprint: args['blueprint'],
  from: args['from'],
  codemodsUrl: args['codemods-url']
};

module.exports.handler = async function handler(argv) {
  try {
    await save({
      ...argv,
      blueprintOptions: argv._.slice(1)
    });
  } catch (err) {
    console.error(err);
  }
};
