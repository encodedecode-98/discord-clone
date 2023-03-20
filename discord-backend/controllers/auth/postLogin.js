const User = require('../../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const postLogin = async (req,res)=>{

    try{    
        const {mail , password} = req.body; 
        const user = await User.findOne({
            mail: mail.toLowerCase(),
        })
        console.log(user)
        if(user && ( bcrypt.compare(password, user.password))){

            // successfully logged in so send a new token
             const token = 'JWT_TOKEN';
             return res.status(200).json({
                userDetails : {
                    mail: user.mail, 
                    token: token ,
                    username : user.username

                }

             });

        }
        return res.status(200).send({
            message : "Something went wrong . Please try again "
        });


    }
    catch(err){
        return res.status(500).send({
            message : "Something went wrong . Please try again"
        })
    }
    res.send('login route');
}

module.exports = postLogin; 