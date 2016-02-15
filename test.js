/*!
 * useful-error <https://github.com/tunnckoCore/useful-error>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('assertit')
var UsefulError = require('./index')

// @todo write tests
test('useful-error:', function () {
  var err = new UsefulError('foo')
  console.log(err)
})
