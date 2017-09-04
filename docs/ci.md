<p align="center" style="text-align: center;"><img src="https://github.com/ethanent/hitched/blob/master/media/hitched-textIncluded.png?raw=true" width="220" alt="hitched logo"/></p>

---

> Git hooks, made easy and lightweight for Node

[GitHub](https://github.com/Ethanent/hitched) | [Hooks list](https://github.com/ethanent/hitched/blob/master/docs/hooks.md) | [NPM](https://www.npmjs.com/package/hitched)

## Using hitched in a CI environment

If you're using a CI environment, you may want to disable hitched in your CI builds. To do so, set the environment variable `ENABLE_HITCHED` to `false` in your CI configuration.

If you don't disable hitched in your CI, it isn't a big deal. hitched will not noticibly impact your test results.