# page-skeleton-core
基于url生成骨架屏结构核心代码

核心源码来自elemeFE开源的一款webpack骨架屏插件[page-skeleton-webpack-plugin][1]

在插件代码中提取出生成骨架结构的核心逻辑，适用于对骨架屏有定制化需求的场景。

## Installation

```bash
npm install --save-dev page-skeleton-core
```

## Basic Use

```javascript
const SkeletonBuilder = require('page-skeleton-core');
let skeletonBuilder = new SkeletonBuilder();

(async () => {
    const result = await skeletonBuilder.build('http://meishi.meituan.com/i/?ci=30&stid_b=1&cevent=imt%2Fhomepage%2Fcategory1%2F1');
})();
```

![示例][2]

### 完善中


  [1]: https://github.com/ElemeFE/page-skeleton-webpack-plugin
  [2]: https://carlwuao.oss-cn-shanghai.aliyuncs.com/skeleton.gif
