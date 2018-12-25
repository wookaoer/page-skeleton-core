const SkeletonBuilder = require('./src/skeletonCore');

let skeletonBuilder = new SkeletonBuilder({
    puppeteerOptions: {
    }
}, console.log);

(async () => {
    skeletonBuilder.build('http://m.to8to.com/sz');
})();

module.exports = {
    SkeletonBuilder
};
