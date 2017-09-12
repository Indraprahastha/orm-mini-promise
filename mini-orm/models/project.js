const sqlite3 =require('sqlite3').verbose()
let db = new sqlite3.Database('./db/data.db')

class Project {
  constructor(raw) {
  }

  static findAll() {
    return new Promise((resolve,reject)=>{
      db.all(`SELECT * FROM Project`,(err,dataProject)=>{
        resolve(dataProject)
      })
    })
  }

  static findById(params) {
    return new Promise((resolve,reject)=>{
      db.all(`SELECT * FROM Project WHERE id ${params}`,(err,dataProject)=>{
        resolve(dataProject)
      })
      
    })
  }

  static findWhere() {}

  static create() {}

  static update() {}

  static destroy() {}

}

module.exports = Project
