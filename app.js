const express = require('express'); 
const app = express(); 
const port = 3000; 
 
app.use('/todos',todoRoute); 
app.get('/', (req, res) => { 
    res.send('amoyyyyyyyyyy!'); 
}); 
 
app.listen(port, () => { 
    console.log('Server running at http://localhost:${port}/'); 
});