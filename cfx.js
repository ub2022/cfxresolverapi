const { resolve } = require("cfx-resolve");

const args = process.argv.slice(2)
const cfx = args[0]

resolve(cfx, { 

    "geo": true 
    
}).then(data => {

    console.log(data);
    
}).catch(err => {

    console.log("[ERROR] "+err.message);
    
})
