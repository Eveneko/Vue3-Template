# Vue 3 + Typescript + Vite Template

[![Last Commit](https://img.shields.io/github/last-commit/Eveneko/Vue3-Template)](https://github.com/Eveneko/Vue3-Template/commits/master)
[![License](https://img.shields.io/github/license/Eveneko/Vue3-Template)](https://github.com/Eveneko/Vue3-Template/blob/master/LICENSE)
[![Deploy](https://img.shields.io/github/workflow/status/Eveneko/Vue3-Template/Vue3%20Template)](https://github.com/Eveneko/Vue3-Template/actions/workflows/deploy.yml)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-Airbnb-hotpink.svg)](https://github.com/lin-123/javascript)

## Technology stack

- 编程语言：[TypeScript 4.x](https://www.typescriptlang.org/zh/) + [JavaScript](https://www.javascript.com/)
- 构建工具：[Vite 2.x](https://cn.vitejs.dev/)
- 前端框架：[Vue 3.x](https://v3.cn.vuejs.org/)
- 路由工具：[Vue Router 4.x](https://next.router.vuejs.org/zh/index.html)
- 状态管理：[Vuex 4.x](https://next.vuex.vuejs.org/)
- UI 框架：[Element Plus](https://element-plus.org/#/zh-CN)
- CSS 预编译：[Stylus](https://stylus-lang.com/) / [Sass](https://sass.bootcss.com/documentation) / [Less](http://lesscss.cn/)
- HTTP 工具：[Axios](https://axios-http.com/)
- Git Hook 工具：[husky](https://typicode.github.io/husky/#/) + [lint-staged](https://github.com/okonet/lint-staged)
- 代码规范：[EditorConfig](http://editorconfig.org) + [Prettier](https://prettier.io/) + [ESLint](https://eslint.org/) + [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript#translation)
- 提交规范：[Commitizen](http://commitizen.github.io/cz-cli/) + [Commitlint](https://commitlint.js.org/#/)
- 单元测试：[vue-test-utils](https://next.vue-test-utils.vuejs.org/) + [jest](https://jestjs.io/) + [vue-jest](https://github.com/vuejs/vue-jest) + [ts-jest](https://kulshekhar.github.io/ts-jest/)
- 自动部署：[GitHub Actions](https://docs.github.com/cn/actions/learn-github-actions)

## Quick Start

### 安装依赖

```sh
npm install
```

### 启动项目

```sh
npm run dev
```

### 项目打包

```sh
npm run build
```

## Problem

- Error: esbuild: Failed to install correctly

```sh
node node_modules/esbuild/install.js
```

- No package 'pangocairo' found

```sh
gcc -v # verison>4.2
brew install gcc@10
alias gcc="gcc-10"
alias g++="g++-10"
alias cc="gcc-10"
alias c++="c++-10"

brew install cairo
brew install pango
```

## Reference

- https://github.com/XPoet/vite-vue3-starter
