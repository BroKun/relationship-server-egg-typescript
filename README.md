# relationship-server

[![Build Status](https://www.travis-ci.org/BroKun/relationship-server.svg?branch=master)](https://www.travis-ci.org/BroKun/relationship-server)
[![Coverage Status](https://coveralls.io/repos/github/BroKun/relationship-server/badge.svg?branch=master)](https://coveralls.io/github/BroKun/relationship-server?branch=master)

we-app for dreamtecher   
基于egg，使用typescript

----
### 使用说明

安装好工程依赖之后，首先需要编译ts文件
```shell
npm run tsc
```

需要清理掉编译后js文件的时候，使用clean命令
```shell
npm run clean
```

开发模式运行
```shell
npm run dev
```

持续集成环境中运行以下命令，完成单元测试和覆盖率报告生成
```shell
npm run ci
```

在vs code中调试，首先手动运行以下命令，然后在vs code中调试启动Debug Egg，Attach到Agent和Worker进程，目前vscode对inspector协议的lanunch支持有问题，无法一键操作。
```shell
npm run debug
```
