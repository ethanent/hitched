<p align="center" style="text-align: center;"><img src="https://github.com/ethanent/hitched/blob/master/media/hitched-textIncluded.png?raw=true" width="220" alt="hitched logo"/></p>

---

> Git hooks, made easy and lightweight for Node

[GitHub](https://github.com/Ethanent/hitched) | [Hooks list](https://github.com/ethanent/hitched/blob/master/docs/hooks.md) | [Migrating](https://github.com/ethanent/hitched/blob/master/docs/migrating.md) | [NPM](https://www.npmjs.com/package/hitched)

## Migrating to hitched

### Why migrate?

hitched is super lightweight compared to all other Git hooks packages.

hitched is a mere 33kb in size.

That's right, husky is almost [700% larger](https://www.google.com/search?q=229kb+%2F+33kb) than hitched.

Install times with hitched are **dramatically faster**, meaning that using hitched allows developers to be happier and more productive.

### How to migrate

Migrating is a super quick process. If you already use husky, switching to hitched takes seconds as all husky hooks are compatible with hitched.

First, uninstall husky.

```shell
npm uninstall husky
```

This should remove husky from your package (dev/regular) dependencies.

Now just install hitched.

```shell
npm install --save hitched
```

You should be good to go by this point! All hooks in husky are compatible with hitched.

After migrating, if you're using a CI, you may also want to have a look at the CI guide: [Using hitched in a CI environment](https://github.com/ethanent/hitched/blob/master/docs/ci.md)