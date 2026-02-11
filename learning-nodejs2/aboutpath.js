import path, { extname } from "path" // here we change type = module
let mypath="C:\\Users\\DHURAV\\OneDrive\\Desktop\\learning javascript\\dhuv.txt"
console.log(path.extname(mypath)) // it file file extension like .txt
console.log(path.dirname(mypath))// it give us a complete folder or dir name 
console.log(path.basename(mypath))// it give filename
console.log(path.join("c:/","programs\\dhruv.txt")) // it helps us to join two different paths
//console.log(path)