# get-bin [![NPM version](https://img.shields.io/npm/v/get-bin.svg)](https://npmjs.com/package/get-bin) [![NPM downloads](https://img.shields.io/npm/dm/get-bin.svg)](https://npmjs.com/package/get-bin) [![Build Status](https://img.shields.io/circleci/project/egoist/get-bin/master.svg)](https://circleci.com/gh/egoist/get-bin)

> Get the name of the executable.

## Install

```bash
$ npm install --save get-bin
```

## Usage

```js
const getBin = require('get-bin')

getBin().then(bin => {
  console.log(bin)
  //=> ['cli-name']
})

// if no `bin` set in `package.json`
getBin().then()
//=> null

// for a specific path
getBin({cwd: '/path/to/somewhere'}).then()

// in sync mode
getBin.sync()
```

## API

### getBin([options])

#### options

##### cwd

Type: `string`  
Default: `Path.dirname(module.parent.filename)`

The path a `package.json` relative to.

### .sync

Sync mode.

## License

MIT © [EGOIST](https://github.com/egoist)
