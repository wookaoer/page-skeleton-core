const SkeletonBuilder = require('./src/skeletonCore');
const fs = require('fs');

// test code

// let skeletonBuilder = new SkeletonBuilder({
//     puppeteerOptions: {
//     }
// }, console.log);
//
// (async () => {
//     const result = await skeletonBuilder.build('http://m.to8to.com/sz');
//     console.log(result.html);
//     fs.writeFileSync('./runtime.html', result.html);
// })();

module.exports = {
    SkeletonBuilder
};
