'use strict';

module.exports = {
  write: true,
  prefix: '^',
  plugin: 'autod-egg',
  test: [
    'test',
    'benchmark',
  ],
  dep: [
    "cross-env",
    "egg",
    "egg-mongoose",
    "egg-scripts",
    "egg-validate",
    "js-yaml",
    "jsonwebtoken",
    "koa-jwt",
    "moment",
    "source-map-support",
    "tslib",
    "typescript",
  ],
  devdep: [
    "autod",
    "autod-egg",
    "coveralls",
    "egg-bin",
    "egg-ci",
    "egg-mock",
    "eslint",
    "eslint-config-egg",
    "tslint",
    "uuid"
  ],
  exclude: [
    './test/fixtures',
    './dist',
  ],
};

