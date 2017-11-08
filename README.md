# base on react

## 增加了图片压缩loader image-webpack-loader

mac引用jpg图片时会报错需要 brew install libpng

## 常用命令

详细命令查看package.json scripts

``` bash

# install dependencies
npm install

# develop => serve with hot reload at localhost:8080
npm run dev

# production => build for production with minification
npm run build

# production => serve at localhost: 8088
npm run start
```

## 项目规范

### 代码风格

[详细 standard 文档](http://standardjs.com/rules.html)

- 不写 `;`
- 缩进为两个空格
- `,` 之后要跟随一个空格
- `:` 之后跟随一个空格
- ...

**代码风格已经配置了 ESlint ，你必须遵守 ：）**

### 代码规范

[详细 airbnb 文档](https://github.com/airbnb/javascript#types)

- 用 let 或者 const，不允许使用 var

```
const a = 1
const b = 2
let count = 1
```

- 对象或者数组的声明用字面量，而不是构造函数

```
const item = {}
const arr = []
```

- 字符串拼接使用字符串模板，而不是 + 拼接

```
let a = hello
const template = `${a} world`
```

- ...

### git规范 (写在这里也只是尽量规范项目)
- 好的git分支模型是什么样子的？ 👇点击下面查看
  [a-successful-git-branching-model](http://nvie.com/posts/a-successful-git-branching-model/) 
  ```json
      主要分成两个分支
      - master 反应生产环境的状态
      - develop 反应最新开发环境的状态
      - staging 发布分支

      在这个基础上有以下几种类型的分支
      - release-* 即将发布的分支，一般都是从功能分支提交到develop，再合并到 release-* 分支。发布前尽量少做修改
      - hotfix-* 作为一个模块的修补分支，命名以模块名作为后缀
      - feat-* 作为一个新模块分支，命名以模块名作为后缀
      ...
      合并 release-* 分支后请打上tag
      $ git checkout master
      切换到分支'master' 
      $ git merge --no-ff release-* (一般为版本号)
      由递归合并。
      （更改摘要）
      $ git tag -a * (一般为版本号)
  ```
- git 提交注释规范
  ```json
    build: 影响构建系统或外部依赖关系的更改（示例范围：gulp，webpack，npm）
    ci: 更改配置文件和脚本（示例范围：Travis，Circle，BrowserStack，SauceLabs
    docs: 仅文档更改
    feat: 一个新功能
    fix: 修复错误
    perf: 改进性能的代码更改
    refactor: 代码更改，既不修复错误也不添加功能
    style: 不影响代码含义的变化（空白，格式化，缺少分号等）
    test: 添加缺失测试或更正现有测试
  ```

## 文件结构
- src
 ```
  .
  ├── client.jsx                    // app 入口
  ├── routes.jsx                    // routes 入口
  ├── serser.jsx                    // 服务端渲染启动
  ├── components                    // 公用组件库
  ├── containers                    // redux&route 根组件
  ├── less                          // 全局样式库
  ├── pages                         // 页面
  │   ├── index.jsx                   // root page
  ├── redux                         // redux 全局状态管理
  ├── services                      // 接口请求
  ├── utils                         // 工具库
 ```

## 技术栈相关文档推荐
核心技术栈(包括但不限于以下)：
- [react@15.4.0](https://github.com/facebook/react) facebook
- [react-router@4.0.0](https://github.com/ReactTraining/react-router)
- ...
