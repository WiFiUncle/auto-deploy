# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.


### vue + vite 项目自动部署搭建步骤

#### 使用场景
前端部署到服务器，没有依赖ci/cd。通过执行脚本、一键编译、scp上传到服务器，同时做备份操作。
解放前端简单部署，只需一键搞定

**本demo可以移植react、vue项目中**

#### 移植步骤

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


#### 4. 编写启动命令

在package.json中添加启动

```json
    "dev-build-deploy": "babel-node ./scripts/build.js && babel-node ./scripts/deploy.js dev",
    "pro-build-deploy": "babel-node ./scripts/build.js && babel-node ./scripts/deploy.js pro"
```
#### 5. 修改build指令()

```js

await execCmd('vite build') ; //看当前项目用哪个指令build就替换下

```
#### 6. 一键启动
