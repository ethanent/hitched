<p align="center" style="text-align: center;"><img src="https://github.com/ethanent/hitched/blob/master/media/hitched-textIncluded.png?raw=true" width="350" alt="hitched logo"/></p>

---

> Git hooks, made easy and lightweight for Node

[GitHub](https://github.com/Ethanent/hitched) | [NPM](https://www.npmjs.com/package/hitched)

## hitched makes Git hooks easy

With hitched, you can easily prevent garbage-y commits and keep bad code out of your repositories.

## Installation

Simply install hitched as a dependency...

```shell
npm install --save hitched
```

And you're now able to use all of the nifty Git commit hooks, right in your package scripts.

`package.json`
```
...
"scripts": {
	"precommit": "npm test",
	"prepush": "npm test",
	...
}
...
```

Pretty awesome, right?

## Full list of Git hooks

hitched supports all common Git hooks.

For a full list of supported Git hooks and information about the hooks, see [the list over here](https://github.com/ethanent/hitched/blob/master/docs/hooks.md).