const w = require('whew')

const path = require('path')

w.add('Generate full paths from relative paths', (result) => {
	result(path.join('/hey', 'hi', 'hello') === '/hey/hi/hello', 'Created full path from relative paths.')
})

w.test()