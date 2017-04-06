/*
* @Author: piaoyidage
* @Date:   2017-04-06 14:55:44
* @Last Modified by:   piaoyidage
* @Last Modified time: 2017-04-06 14:56:25
*/

'use strict';

/**
 * 使用babel转换成低版本js
 */

var register = require('babel-core/register');

register({
    presets: ['stage-3']
});

require('./app.js');