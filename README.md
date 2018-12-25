# page-skeleton-core
基于url生成骨架屏结构核心代码
核心源码来自elemeFE开源的一款webpack骨架屏插件[page-skeleton-webpack-plugin][1]

## Installation

```bash
npm install --save-dev page-skeleton-core
```

## Basic Use

```javascript
const SkeletonBuilder = require('page-skeleton-core');
let skeletonBuilder = new SkeletonBuilder();

(async () => {
    const result = await skeletonBuilder.build('http://m.baidu.com/');
})();
```

![示例][2]

### result description


  [1]: https://github.com/ElemeFE/page-skeleton-webpack-plugin
  [2]: https://carlwuao.oss-cn-shanghai.aliyuncs.com/skeleton.gif
