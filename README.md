# relationship-server

[![Build Status](https://www.travis-ci.org/BroKun/relationship-server-egg-typescript.svg?branch=master)](https://www.travis-ci.org/BroKun/relationship-server-egg-typescript)
[![Coverage Status](https://coveralls.io/repos/github/BroKun/relationship-server-egg-typescript/badge.svg?branch=master)](https://coveralls.io/github/BroKun/relationship-server-egg-typescript?branch=master)
  
提供简单的用户信息管理，为小程序提供服务支持。

* 基于**Egg**的框架支持,使用**Typescript**编写
* 使用**Mongo**进行数据存储
* 提供Github API风格的Restful API
* 基于json web token的认证方式
* 完整的类型定义和单元测试支持

## middleware & plugin
* egg-validator
* egg-mongoose
* koa-jwt
* koa-json
## API
[API文档]()
ApiDoc生成文档
### TODO

- [ ] 对last-modified-since的响应
- [ ] Hyperlink url的支持
- [ ] rate-limit 
- [ ] GraphQL


## Contributors
* [BroKun](https://github.com/BroKun)
* [Youngnutcake](https://github.com/Youngnutcake)

----
## Usage

```shell
编译ts文件: npm run tsc
本地运行: npm run dev
unittest: npm test
```
在VS Code中直接按'F5'以调试模式运行，其他参见[egg官方文档-本地开发-调试](http://eggjs.org/zh-cn/core/development.html#调试)
