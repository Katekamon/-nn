const express = require('express') //ให้มันรู้้จักแพกเกจ
const mongodb = require('mongodb')

var app = express() // เรียกใช้เสมอ ถ้าใช้express สร้างตัวแปร1ตัวเพื่อจะสร้างserver

//ทำhttp get
app.get('/',(req,res) => { //''พารามิเตอร์ตัวแรกคือpath ตัวที่2คือฟังก์ชัน ทำแบบนี้ทั้งgetและpost
    res.send('hello')
})

app.listen(3000, () => {
    console.log('is listen on port 3000')
})

