const fs = require('fs')
const path = require('path')

module.exports = (hookName, content, githooksDir) => {
	const hookPath = path.join(githooksDir, hookName)

	try {
		fs.writeFileSync(hookPath, content, {
			'mode': 0o777
		})

		return true
	}
	catch (err) {
		console.error('Failed to hitch a hook. (' + hookName + ')')

		return false
	}
}