var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray (chocolateBars){
  return ['foo', ...chocolateBars]
}
function destructivelyAddElementToBeginningOfArray (chocolateBars){
  chocolateBars.push(1, 1)
  return chocolateBars
}
