const SkeletonBuilder = require('./src/skeletonCore');

// test code
// const fs = require('fs');
// let skeletonBuilder = new SkeletonBuilder({
//     preview: true,
//     defer: 5000,
//     device: 'iPhone 6',
//     image: {
//         shape: 'rect',
//         color: '#EFEFEF',
//         shapeOpposite: [],
//         fixedSize: true
//     }
// }, console.log);
//
// (async () => {
//     const result = await skeletonBuilder.build('http://meishi.meituan.com/i/?ci=30&stid_b=1&cevent=imt%2Fhomepage%2Fcategory1%2F1');
//     console.log(result);
//     fs.writeFileSync('./test.html', result.html)
// })();

module.exports = {
    SkeletonBuilder
};
