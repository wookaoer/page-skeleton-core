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

### 

# Documents

## skeletonOptions

参考page-skeleton-webpack-plugin的options说明，下面仅对新增字段进行说明。

| Option  | Type    | Required | Default | Description                                          |
| ------- | ------- | -------- | ------- | ---------------------------------------------------- |
| preview | Boolean | No       | false   | 预览模式，将不会返回骨架结构结果，仅在浏览器预览效果 |



## puppeteerOptions

| Option            | Type    | Required | Default | Description                                   |
| ----------------- | ------- | -------- | ------- | --------------------------------------------- |
| timeout           | int     | No       | 15000   | 参考puppeteer launch参数中的timeout           |
| ignoreHTTPSErrors | Boolean | No       | true    | 参考Puppeteer launch参数中的ignoreHTTPSErrors |
| devtools          | Boolean | No       | true    | 参考Puppeteer launch参数中的devtools          |
| headless          | Boolean | No       | False   | 参考Puppeteer launch参数中的headless          |
|                   |         |          |         |                                               |

 

### 


[1]: https://github.com/ElemeFE/page-skeleton-webpack-plugin
[2]: https://carlwuao.oss-cn-shanghai.aliyuncs.com/skeleton.gif
