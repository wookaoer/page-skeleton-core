# page-skeleton-core
基于url生成骨架屏结构核心代码

核心源码来自elemeFE开源的一款webpack骨架屏插件[page-skeleton-webpack-plugin][1]

在插件代码中提取出生成骨架结构的核心逻辑，适用于对骨架屏有定制化需求的场景。

## Installation

```bash
npm install page-skeleton-core
```

## Basic Use

```javascript
let skeletonBuilder = new SkeletonBuilder({
    preview: true, // 预览骨架屏模式
    defer: 5000
}, console.log);

(async () => {
    const result = await skeletonBuilder.build('https://m.to8to.com/sz');
    console.log(result);
})();
```

![示例][2]

# Documents

## options

参考page-skeleton-webpack-plugin的options说明，https://github.com/ElemeFE/page-skeleton-webpack-plugin

下面仅对新增字段进行说明。

| Option          | Type    | Required | Default | Description                                                  |
| --------------- | ------- | -------- | ------- | ------------------------------------------------------------ |
| preview         | Boolean | No       | false   | 预览模式，将不会返回骨架结构结果，仅在浏览器预览效果         |
| waitForSelector | String  | No       | none    | 参考puppeteer waitForSelector参数。等待某个选择器的元素加载之后，适用于等待某个异步的结果后执行。相比defer参数更加精准一些。 |



## return options

```javascript
// 预览模式
if (preview) return Promise.resolve(true);
```

预览模式下返回`true`。



```javascript
let shellHtml = `<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <title>Page Skeleton</title>
    <style>
    $$css$$
    </style>
    </head>
    <body>
    $$html$$
    </body>
    </html>`;
shellHtml = shellHtml
    .replace('$$css$$', finalCss)
    .replace('$$html$$', cleanedHtml);
const result = {
    html: htmlMinify(shellHtml, false),
    styles: finalCss,
    cleanedHtml: cleanedHtml
};
```

非preview模式下返回一个对象，对象包含三个参数：

`html`：`String` 完整的骨架屏html结构代码字符串。

`styles`：`String` 骨架结构相关样式。

`cleanedHtml`：`String` 骨架DOM结构。

### 


[1]: https://github.com/ElemeFE/page-skeleton-webpack-plugin
[2]: https://carlwuao.oss-cn-shanghai.aliyuncs.com/skeleton.gif
