const init = require('./init');
module.exports = init
// const usersRouter = express.Router();
// usersRouter.use(bodyParser.json());

// usersRouter.post('/signup',  Authenticate.signup);

// module.exports.signin = (req, res, next) => {
//     return `hii`;
//     // console.log(req.user);
//     // res.send({ token: tokenForUser(req.user), isAdmin: req.user.isAdmin });

// }

// module.exports = (str,str2) => {
 
//     Authenticate.signup(str, str2);
//     return `${str} !!!!!!!! ${str2}`;
// }

// function  signup(username ,password) {
//     Authenticate.signup(username, password);
// }

// function  insertData(json,tableName,path) {
//     Authenticate.insertData(json,tableName,path);
// }

// function  updateData(json,tableName,condition,values_array) {
//     Authenticate.updateData(json,tableName,condition,values_array);
// }

// function  deleteData(json,tableName,condition,values_array) {
//     Authenticate.deleteData(json,tableName,condition,values_array);
// }

// function  getData(tableName,json) {
//     Authenticate.getData(tableName,json);
// }

// function  login(username ,password) {
//     Authenticate.login(username, password);
// }

// function  createView(tableName,jsonData ) {
//     // console.log(jsonData[tableName]);
//     return jsonData[tableName];
// }


// function  createHtmlView(tableName,jsonData ) {
//     // console.log(jsonData[tableName]);
//     var arr={};
//     let thisJson = jsonData[tableName];
//     for(var attributename in thisJson){
//         // console.log(attributename);
//         // console.log(thisJson[attributename]);
//         if(thisJson[attributename].type == "text"){
//             // arr.
//             arr[attributename] ="<input type='text' id='"+attributename+"' name='"+attributename+"'>";
//         }else if(thisJson[attributename].type == "checkbox"){
//             arr[attributename] ="<input type='checkbox' id='"+attributename+"' name='"+attributename+"'> value='"+thisJson[attributename].value+"'";
//         }
//     }
//     // let htmlTag ='';
//     // if (typeof thisJson.type !== "undefined" || thisJson.type !== null){
//     //     console.log("----1---");
//     // }
//     // console.log(arr);
//     // console.log(JSON.stringify(arr));
//     return arr;
// }

// module.exports = (str,str2) => {
//     Authenticate.signup(str, str2);
//     return `${str} !!!!!!!! ${str2}`;
// }

// module.exports = {
//     signup,
//     login,
//     createView,
//     createHtmlView,
//     insertData,
//     updateData,
//     deleteData,
//     getData
// };