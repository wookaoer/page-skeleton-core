const SkeletonBuilder = require('./src/skeletonCore');

// test code
// const fs = require('fs');
let skeletonBuilder = new SkeletonBuilder({
    skeletonOptions: {
        preview: true
    },
    puppeteerOptions: {
        waitForSelector: '.poi-info-wrapper'
    }
}, console.log);

(async () => {
    const result = await skeletonBuilder.build('http://meishi.meituan.com/i/?ci=30&stid_b=1&cevent=imt%2Fhomepage%2Fcategory1%2F1');
})();

module.exports = {
    SkeletonBuilder
};
