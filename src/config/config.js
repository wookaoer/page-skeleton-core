'use strict'

const staticPath = '__webpack_page_skeleton__'

const defaultOptions = {
    port: '8989',
    // ['spin', 'chiaroscuro', 'shine'],
    loading: 'spin',
    text: {
        color: '#EEEEEE'
    },
    image: {
        // `rect` | `circle`
        shape: 'rect',
        color: '#EFEFEF',
        shapeOpposite: [],
        fixedSize: false
    },
    button: {
        color: '#EFEFEF',
        excludes: []
    },
    svg: {
        // or transparent
        color: '#EFEFEF',
        // circle | rect
        shape: 'circle',
        shapeOpposite: []
    },
    pseudo: {
        // or transparent
        color: '#EFEFEF',
        // circle | rect
        shape: 'circle',
        shapeOpposite: []
    },
    device: 'iPhone 6 Plus',
    debug: false,
    minify: {
        minifyCSS: {level: 2},
        removeComments: true,
        removeAttributeQuotes: true,
        removeEmptyAttributes: false
    },
    defer: 5000,
    excludes: [],
    remove: [],
    hide: [],
    grayBlock: [],
    cookies: [],
    headless: true,
    h5Only: false,
    // or 'vw|vh|vmin|vmax'
    cssUnit: 'rem',
    decimal: 4,
    logLevel: 'info',
    quiet: false,
    noInfo: false,
    logTime: true,
    preview: false,
    waitForSelector: null,
    // hooks
    beforeLaunch: null,
    storagies: {
        test: '1234'
    }
}

const htmlBeautifyConfig = {
    indent_size: 2,
    html: {
        end_with_newline: true,
        js: {
            indent_size: 2
        },
        css: {
            indent_size: 2
        }
    },
    css: {
        indent_size: 1
    },
    js: {
        'preserve-newlines': true
    }
}

const puppeteerConfig = {
    timeout: 15000,
    //如果是访问https页面 此属性会忽略https错误
    ignoreHTTPSErrors: true,
    // 打开开发者工具, 当此值为true时, headless总为false
    devtools: true,
    // 关闭headless模式, 不会打开浏览器
    headless: false
}

module.exports = {
    htmlBeautifyConfig,
    defaultOptions,
    staticPath,
    puppeteerConfig
}
