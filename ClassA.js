
/** @type {import('./ClassB')} */
const B = JSON.parse("")

class A extends B {
  foo () {
    // this. doesn't provide the Bar method.
  }
}
