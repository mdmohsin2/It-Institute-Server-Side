const express = require('express')
const app = express()
const port = 5000
const cors = require('cors');
app.use(cors());

const category = require('./Categoris.json')
const course = require('./data.json')


app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.get('/allcourse', (req, res) => {
    res.send(category)
})

app.get('/course/:id', (req,res)=>{
    const id = req.params.id;
    if(id == '0'){
        res.send(course)
    }
    else{
        const course_ifno = course.filter(f=> f.id ==id)
        res.send(course_ifno)
    }
})

app.get('/alls', (req, res)=>{
    res.send(course)
})


app.get('/smallSingleCourse/:id', (req, res) => {
    const id = req.params.id;
    const selectCourse = course.find(c => c.id == id)
    res.send(selectCourse)
})





app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})