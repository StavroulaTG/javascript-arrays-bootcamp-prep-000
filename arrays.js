var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray (chocolateBars){
  return ['foo', ...chocolateBars]
}
function destructivelyAddElementToBeginningOfArray (chocolateBars){
  return ['foo', 1,...chocolateBars]
}
