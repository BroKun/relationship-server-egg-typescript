# relationship-server

[![Build Status](https://www.travis-ci.org/BroKun/relationship-server.svg?branch=master)](https://www.travis-ci.org/BroKun/relationship-server)
[![Coverage Status](https://coveralls.io/repos/github/BroKun/relationship-server/badge.svg?branch=master)](https://coveralls.io/github/BroKun/relationship-server?branch=master)
  
基于egg，使用Typescript

----
### 使用说明

#### 编译
安装好工程依赖之后，首先需要编译ts文件
```shell
npm run tsc
```
在开发阶段需要持续编译，可以选择watch本地文件变化
```shell
npm run tsc:w
```
需要清理掉编译后js文件的时候，使用clean命令
```shell
npm run clean
```
#### 运行
开发模式运行，运行环境为loacl
```shell
npm run dev
```
#### 单元测试
运行单元测试时，运行环境为unittest
```shell
npm test
```
需要生成单元测试覆盖了报告的话
```shell
npm run cov
```

#### 持续集成
持续集成环境中运行以下命令，完成单元测试和覆盖率报告生成，现在持续集成在Travis上完成
```shell
npm run ci
```
#### 调试
在VS Code中直接按'F5'以调试模式运行，其他参见[egg官方文档-本地开发-调试](http://eggjs.org/zh-cn/core/development.html#调试)
