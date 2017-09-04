console.log('Hitching hooks...')

const fs = require('fs')
const path = require('path')

const saveHook = require(path.join(__dirname, '..', 'lib', 'saveHook.js'))

const hooks = require(path.join(__dirname, '..', 'hooks.js')) // script:hookname
const hookNames = Object.keys(hooks)

const packageRoot = path.join(__dirname, '..', '..', '..')
const packageMetadataLocation = path.join(packageRoot, 'package.json')

const githooksDir = path.join(packageRoot, '.git', 'hooks')


var packageMetadata = null

try {
	packageMetadata = JSON.parse(fs.readFileSync(packageMetadataLocation))
}
catch (err) {
	console.error('Failed to read package metadata. Any hooks in package scripts will not be hitched. ' + err)
	process.exit(0)
}

const packageScripts = packageMetadata.scripts || {};


var savedHooksCount = 0;
var failedHooksCount = 0;

for (let i = 0; i < hookNames.length; i++) {
	if (packageScripts.hasOwnProperty(hookNames[i])) {
		var saveResult = saveHook(hooks[hookNames[i]], packageScripts[hookNames[i]], githooksDir)

		if (saveResult === true) {
			savedHooksCount++
		}
		else {
			failedHooksCount++
		}
	}
}

console.log('Finished hitching ' + savedHooksCount + ' hooks. (' + failedHooksCount + ' failed.)')

process.exit(0)