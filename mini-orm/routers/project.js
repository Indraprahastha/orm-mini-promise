const express = require('express')
const router = express.Router()
const modelProject = require('../models/project')

router.get('/',(req,res)=>{
  modelProject.findAll().then(dataProject=>{
    res.render('project',{dataProject:dataProject})
  })
})

router.get('/edit/:id',(req,res)=>{
  modelProject.findById(req.params.id).then(dataProject=>{
    res.render('project-edit',{dataProject:dataProject})
  })
})

router.post('/edit/:id',(req,res)=>{
  modelProject.update(req.body,req.params.id).then(dataProject=>{
    res.redirect('/project',{dataProject:dataProject})
  })
})

module.exports = router
