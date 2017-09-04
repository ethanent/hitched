const w = require('whew')

const path = require('path')

const hooks = require(path.join(__dirname, '..', 'hooks.js'))

w.add('Generate full paths from relative paths', (result) => {
	result(path.join('/hey', 'hi', 'hello') === '/hey/hi/hello', 'Created full path from relative paths.')
})

w.add('Ensure hooks.js exports object', (result) => {
	result((typeof hooks === 'object'), 'hooks.js exports were of type \'' + typeof hooks + '\'.')
})

w.test()