# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)


### vue + vite 项目自动部署搭建步骤

#### 1. 安装依赖
 - `yarn add child_process babel-node  babel-core babel-preset-es2015 babel-preset-env babel-cli scp2`
#### 2. 创建  .babelrc 文件
```
{
  "presets": [
    "env"
  ],
  "plugins": []
}

```  
#### 3. 修改配置文件,填写部署服务器账号信息
`/scripts/config/deployConfig.js`
