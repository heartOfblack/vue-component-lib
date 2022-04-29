# 汇电储能UI组件库(该项目暂未使用，原打算用来做饿了么组件库二次封装及文档说明项目)



### 安装依赖

```npm install```

### 生成示例DEMO

```npm run build-demo```

### 生成工具库并发布到NPM

```npm run build-lib```

```npm publish```

### 组件库使用

```npm install energy-storage-ui```

```js

import { HdcButton } from 'energy-storage-ui' //按需引入
//import HDC from from 'energy-storage-ui' //全部引入
import Vue from 'vue'

Vue.use(HdcButton) // <hdc-button></hdc-button>
//Vue.use(HDC)
```



