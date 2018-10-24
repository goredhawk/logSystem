/**
 * Created by 刘娟娟 on 2016/9/19.
 */
var mongoose=require('mongoose');
var User=require('./models/user');
const bcrypt = require('bcrypt-nodejs');
var mongoIp=require('./config').mongoIp;
mongoose.connect('mongodb://'+mongoIp+'/workbook');
function initUser(){
    var userObj=new User({name:'admin',email:'admin'});
    bcrypt.genSalt(10,function(err,salt){
        if(err){
            console.log(err);
        }else{
            bcrypt.hash('123',salt,null,function(err,hash){
                if(err){
                    console.log(err);
                }else{
                    userObj.password=hash;
                    userObj.save(function(err,data){
                        if(err){
                            console.log(err);
                        }else{
                            console.log('ok')
                        }
                    })
                }
            })
        }
    })
}
initUser()