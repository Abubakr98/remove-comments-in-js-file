const fs = require('fs');

let file,
    codeStr;

file = 'testFileForRemoveComments.js';
codeStr = fs.readFileSync(file, { encoding: 'utf8' });

try {
    new Function(codeStr);
} catch (err) {
    console.log("js file not valid!", err);
    throw "js file not valid!";
}

removeComments = (str) =>{
   return str.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, '$1');
}
let removedCommentsCode = removeComments(codeStr);

fs.writeFile('testFileForRemoveComments.js', removedCommentsCode, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Comments successfuly removed!');
    }
});