const express = require('express') //ให้มันรู้้จักแพกเกจ
const mongodb = require('mongodb')

var app = express() // เรียกใช้เสมอ ถ้าใช้express สร้างตัวแปร1ตัวเพื่อจะสร้างserver
let student = [
    {
        id:'st1',
        name:'aaa'
    }, 
    {
        id:'st2',
        name:'bbb'
    }, 
    {
        id:'st3',
        name:'ccc'
    }
]


//ทำhttp get
app.get('/',(req,res) => { //''พารามิเตอร์ตัวแรกคือpath ตัวที่2คือฟังก์ชัน ทำแบบนี้ทั้งgetและpost
    res.send('hello')
})

app.get('/all-student', (req, res) => {
    res.send(student)
}) //ดึงข้อมูลของนักเรียนทั้งหมด3คน

app.get('/all-student/:id', (req, res) => {
    let studentID = req.params.id 
    for(let i=0;i<student.length;i++){
        if(studentID == student[i].id){ //เช็คว่าที่เขาinputเข้ามาว่าตรงกับนักเรียนอาเรย์คนที่เท่าไหร่ ถ้ามันเท่ามันจะresกลับไปให้user
            res.send(student[i])
            break
        }
    }
    res.send('not found this id : '+studentID)
})//การคิวรี่คือดึงแค่บางส่วน

app.get('/all-student/name/:name', (req, res) => {
    let studentName = req.params.name 
    for(let i=0;i<student.length;i++){
        if(studentName == student[i].name){ //เช็คว่าที่เขาinputเข้ามาว่าตรงกับนักเรียนอาเรย์คนที่เท่าไหร่ ถ้ามันเท่ามันจะresกลับไปให้user
            res.send(student[i])
            break
        }
    }
    res.send('not found this name : '+studentName)
})


app.listen(3000, () => {
    console.log('is listen on port 3000')
})

