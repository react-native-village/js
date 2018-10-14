const _ = import('lodash')

function run() {
  console.log('abc')
}
 
var realFunction = 
  _.debounce(run, 1500)
 
realFunction()
realFunction()
realFunction()
