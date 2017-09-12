const sqlite3 =require('sqlite3').verbose()
let db = new sqlite3.Database('./db/data.db')

db.serialize(()=>{
  db.run(`CREATE TABLE IF NOT EXISTS Supervisor (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nama VARCHAR(50),
    email VARCHAR(50))`),()=>{
      console.log('Table Addresses Done');
    }

  db.run(`CREATE TABLE IF NOT EXISTS Project (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nama VARCHAR(50),
    status VARCHAR(50),
    id_supervisor INTEGER,
    FOREIGN KEY(id_supervisor) REFERENCES Supervisor(id))`),()=>{
      console.log('Tabel Project Selesai');
    }
})
