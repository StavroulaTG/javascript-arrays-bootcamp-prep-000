var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray (chocolateBars){
  return ['foo', ...chocolateBars]
}
function destructivelyAddElementToBeginningOfArray (chocolateBars){
  chocolateBars.unshift('foo')
  return chocolateBars
}
function addElementToEndOfArray (chocolateBars){
  return [...chocolateBars, 'foo']
}
function destructivelyAddElementToEndOfArray(chocolateBars) {
    return [...chocolateBars, 'foo']
}
function destructivelyAddElementToEndOfArray (chocolateBars) {
  chocolateBars.push('foo')
  return chocolateBars
}
function accessElementInArray (chocolateBars, 3) {
  return chocolateBars[3]
}
