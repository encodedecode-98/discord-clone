const User = require('../../models/user');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');

const postRegister = async (req,res)=>{
    try {    
        const {username , mail , password} = req.body;
        console.log(username);
        console.log(mail);
        console.log(password);

        // check if user exists 

        const userExists = await User.exists({
            mail
        })
       
        if(userExists){
            return res.status(409).send('E-mail already in use.')
        }
        // encrypt password 

        const encryptedPassword = await bcrypt.hash(password, 10)

        // create user document and save in database 

        const user = await User.create({
            username :username, 
            mail: mail.toLowerCase(),
            password : encryptedPassword
        })
        console.log('USER CREATED');
        console.log(user);

        // create JWT 
        

        const token= jwt.sign({
            userId : user._id,
            mail
        },
        process.env.SECRET_KEY,
        {
            expiresIn : "24h"
        }

        )

        // const token = 'JWT_TOKEN';
        return res.status(201).json({
            mail : user.mail ,
            token : token , 
            username : user.username
        })

    }
    catch(err){
        
        return res.status(500).send("Error occured . Please try again."+err)
    }


    // return res.send('Register route');
}

module.exports = postRegister; 

