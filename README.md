## 项目介绍

该项目由vite搭建，并改造成支持vue2（默认是vue3），

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



