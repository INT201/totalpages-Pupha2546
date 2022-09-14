const { template } = require('@babel/core')

function totalPages(arrayItems, rowsPerPage) {
  //code here
  if (rowsPerPage == null || rowsPerPage == undefined) {
    return 1
  }
  else if (arrayItems == null || arrayItems == undefined) {
    return undefined
  }
  else {
    if (rowsPerPage == 0 || rowsPerPage > arrayItems.length) {
      return 1
    }
    else {
      return Math.ceil(arrayItems.length / rowsPerPage)
    }
  }
}
module.exports = totalPages
