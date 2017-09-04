const fs = require('fs')
const path = require('path')

module.exports = (hookName, content, githooksDir) => {
	const hookPath = path.join(githooksDir, hookName)

	try {
		fs.writeFileSync(hookPath, content)
		fs.chmodSync(hookPath, 777)

		return true
	}
	catch (err) {
		console.error('Failed to hitch a hook. (' + hookName + ')')

		return false
	}
}