var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray (chocolateBars){
  return ['foo', ...chocolateBars]
}
function destructivelyAddElementToBeginningOfArray (chocolateBars){
  chocolateBars.unshift('foo')
  return chocolateBars
}
function addElementToEndOfArray (chocolateBars){
  chocolateBars.unshift('foo')
  return chocolateBars
}