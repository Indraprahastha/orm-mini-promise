const express = require('express')
const router = express.Router()
const modelProject = require('../models/project')

router.get('/',(req,res)=>{
  modelProject.findAll().then(dataProject=>{
    res.send(dataProject)
  })
})

router.get('/edit/:id',(req,res)=>{
  modelProject.findById(req.params.id).then(dataProject=>{
    res.send(dataProject)
  })
})

module.exports = router
