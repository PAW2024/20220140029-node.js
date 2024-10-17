const { get } = require('express/lib/response'); 
 
constexpress = require('express'); 
const router = express.Router(); 
 
let todo = [ 
    { 
        id: 1, task: "Belajar Node.js", completed: false 
    }, 
    { 
        id: 2, task: "Membuat API", completed: false 
    }, 
]; 
 
router.get('/', (req, res)=> {res.json9(todos);}); 
 
module.exports = router;