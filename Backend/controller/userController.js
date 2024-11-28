import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import createToken_saveCookie from '../jwt/generateToken.js';


export const signUp = async (req, res) => {

    const { fullname, email, password, confirmPassword } = req.body;

    try {

        // Condition 1 -:

        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Password do not match" });
        }

        // Condition 2 -:

        const user = await User.findOne({ email }); //findOne is method of MongoDB
        if (user) {
            return res.status(400).json({ error: "User already registered" });
        }

        // Password Hashing (bcryptjs)
        
        const hashPassword = await bcrypt.hash(password,10);

        // Create user -:

        const newUser = await new User({
            fullname,
            email,
            password : hashPassword,
        })

        // To save user in database

        await newUser.save();

        // When newUser create then id will automatic create fieldName (_id)

        if(newUser){
            createToken_saveCookie(newUser._id, res);
            return res.status(201).json({ message: "User registered successfully", 
                user: {
                    _id: newUser._id,
                    fullname: newUser.fullname,
                    email: newUser.email
                }
             });
        }
        

    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

// Create Auth for Login

export const login = async (req, res) => {

    try {

        const { email, password } = req.body;
        // Condition 1 -:
        const user = await User.findOne({email});
        // Condition 2 -:
        const isMatch = await bcrypt.compare(password, user.password);
        if(!user || !isMatch){
            return res.status(400).json({ error: "Invalid Credential" });    
        }
        createToken_saveCookie(user._id, res);
        res.status(200).json({message:"User logged successfully", 
            user : { 
                _id : user._id,
                fullname : user.fullname,
                email : user.email
            }
        })

        // When newUser create then id will automatic create fieldName (_id)

    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

// Logout User by clear cookie

export const logout = async (req, res) => {

    try {
        res.clearCookie('jwt'); // jwt because when we create cookie thet name was jwt (check generateToken.js)
        res.status(200).json({ message: "User logged out successfully"});


    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Internal Server Error" });


    }
}

// Fetch All user

export const allUsers = async (req, res) => {
    try{    
        const loggedInUser = req.user._id;
        // if use logged in so we no need this user to show
        const filterUsers = await User.find({_id : {$ne : loggedInUser}}).select('-password');     // this 'User' atlas model User userModel.js and $ne (not equal) and removve password
        res.status(201).json({ filterUsers, });
    } catch (error){
        console.log("Error in allUser controller", + error);
        
    }
}