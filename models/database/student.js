const {con, executeQuery} = require("./connection");

function registerStudent(user, callback){
  let query = `INSERT INTO students (name, email, phone, college, year, department, degree, graduation_year, dob) 
    VALUES (?,?,?,?,?,?,?,?,?)`;
  let values = [user.name, user.email, user.phone, user.college, user.year, user.department,
     user.degree, user['graduation-year'], user.dob];

  con.query(query, values, (err, result, fields)=>{
    if(err){
      console.log(err.message);
      callback(null);
      return;
    }
    // console.log(result.insertId)
    callback(result.insertId);
  });
}

async function getUserPass(userID){
  let query = `SELECT name, id, email from students WHERE id = ?`;
  try{
    let res = await executeQuery(query, [userID]);
    // console.log(res[0]);
    return res[0];
  }catch(e){
    console.log(err.message);
    return;
  }
}

async function login(user){
  let query = `SELECT name, id, email from students WHERE email = ? and password = ? `;
  try{
    let res = await executeQuery(query, [user.email, user.password]);
    // console.log(res[0]);
    return res[0];
  }catch(e){
    console.log(err.message);
    return;
  }
}


async function getUser(userID){
  let query = `SELECT *from students WHERE id = ?`;
  try{
    let res = await executeQuery(query, [userID]);
    // console.log(res[0]);
    return res[0];
  }catch(e){
    console.log(err.message);
    return;
  }
}

module.exports = { registerStudent, getUser, getUserPass, login};