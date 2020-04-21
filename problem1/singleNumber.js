// MARK: Code
/**
* @param {number[]} nums
* @return {number}
*/
const singleNumber = (
  nums
) => {
  return nums.find((value) => {
    return nums.indexOf(value) === nums.lastIndexOf(value)
  })
}

// MARK: Unit Test

const test1 = singleNumber([1, 1, 0, 1, 1, 1])
console.log("test1:", test1, test1 == 0 ? "success" : "faild")

const test2 = singleNumber([3, 1, 3, 1, 1, 3, 3, 5, 1, 3, 1])
console.log("test2:", test2, test2 == 5 ? "success" : "faild")

const test3 = singleNumber([3, 1, 3, 1, 1, 3, 3, 1, 3, 1])
console.log("test3:", test3, test3 == undefined ? "success" : "faild")

const test4 = singleNumber([3, 1, 3, 1, 1, 3, 3, 5, 1, 3, 1, 6])
console.log("test4:", test4, test4 == 5 ? "success" : "faild")

// MARK: Explanation
// Big O: O(n2)
