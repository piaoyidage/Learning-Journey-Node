/**
 * 使用babel转换成低版本js
 */

var register = require('babel-core/register');

register({
    presets: ['stage-3']
});

require('./app.js');