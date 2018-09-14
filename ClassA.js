'use strict'

/** @typedef {typeof import('@adonisjs/lucid/src/Lucid/Model')} Model */

/** @type {Model} */
const Model = use('Model')

class MyModel extends Model {
  test () {
    this
  }
}
