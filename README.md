<p align="center" style="text-align: center;"><img src="" width="250" alt="hitched logo"/></p>

---

> Git hooks, made easy and lightweight for Node

[Full documentation](https://ethanent.github.io/hitched/) | [GitHub](https://github.com/Ethanent/hitched) | [NPM](https://www.npmjs.com/package/hitched)

## hitched makes everything easier.

With hitched, you can easily prevent garbage-y commits and keep bad code out of your base.

## Install hitched

```shell
npm install --save hitched
```

package.json
```json
{
	"scripts": {
		"precommit": "npm test",
		"prepush": "npm test"
	}
}
```