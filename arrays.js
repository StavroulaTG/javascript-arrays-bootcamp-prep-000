var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray (chocolateBars){
  return ['foo', ...chocolateBars]
}
function destructivelyAddElementToBeginningOfArray (chocolateBars){
  chocolateBars.unshift('foo')
  return chocolateBars
}
function destructivelyAddElementToBeginningOfArray (chocolateBars){
  chocolateBars.push('foo')
  return chocolateBars
}