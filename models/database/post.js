const {con, executeQuery} = require("./connection");

function uploadPost(post, callback){
  let query = `INSERT INTO posts (title, description, image, user_id) 
    VALUES (?,?,?,?)`;
  let values = [post.title, post.description, post.image, post.userID];

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

async function getAllPost(){
  let query = `SELECT *from posts`;
  try{
    let res = await executeQuery(query);
    return res;
    
  }catch(e){
    console.log(e.message);
    return;
  }
}

module.exports = {uploadPost, getAllPost}