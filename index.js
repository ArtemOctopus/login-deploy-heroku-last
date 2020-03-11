const app = require('./app')
const port = 'https://testdeployapp1.herokuapp.com/'

app.get('/', (req,res)=>{
    res.status(200).json({
        message: 'working'
    })
})

app.listen(port, () => {
    console.log('server started port:', port)
})