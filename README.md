# relationship-server
[![Build Status](https://www.travis-ci.org/BroKun/relationship-server.svg?branch=master)](https://www.travis-ci.org/BroKun/relationship-server)
[![Coverage Status](https://coveralls.io/repos/github/BroKun/relationship-server/badge.svg?branch=master)](https://coveralls.io/github/BroKun/relationship-server?branch=master)
a Wechat mini-programs for dreamtecher

## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development
```shell
$ npm install
$ npm run dev
$ open http://localhost:7001/news
```

### Deploy

Use `EGG_SERVER_ENV=prod` to enable prod mode

```shell
$ EGG_SERVER_ENV=prod npm start
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org
