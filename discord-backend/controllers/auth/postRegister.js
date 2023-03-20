const User = require('../../models/user');
const bcrypt = require('bcryptjs')

const postRegister = async (req,res)=>{
    try {
        const {username , mail , password} = req.body;

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
            username , 
            mail: mail.toLowerCase(),
            password : encryptedPassword
        })

        // create JWT token

        const token = 'JWT TOKEN';
        return res.status(201).json({
            mail : user.mail ,
            token : token , 
            username : user.username
        })

    }
    catch(err){
        return res.status(500).send("Error occured . Please try again.")
    }


    // return res.send('Register route');
}

module.exports = postRegister; 
