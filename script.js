console.log('working')

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]


function binarySearch(array, target){
  // edge case 
  if (target > array[array.length-1]) return -1
  
  let start = 0
  let end = array.length - 1
  let middle = Math.floor((start +end) /2)
  
  while(start <=  end){
    if(array[middle] == target) {
      return array[middle]
    } else if (array[middle] > target){
      end = middle -1
      middle = Math.floor((start + end )/2)
    } else if (array[middle] < target){
      start = middle + 1
      middle = Math.floor((start + end)/2)
    }
  }
  
  return -1
  
}

results =  binarySearch([3,4,6,9,10,12,15,22,30,31,43,56],12)

console.log(results)


// count zeroes problem
function countZeroes(array) {
    let left = 0
    let right = array.length - 1
    let middleIndex = Math.floor((left + right) / 2)
    
    while (left <= right) {
        if (array[middleIndex] == 1 && array[middleIndex + 1] == 0) {
            return (array.length - 1) - middleIndex
        } else if(array[middleIndex] == )
    }

    return 0
}