import jwt from 'jsonwebtoken';

// When newUser create then id will automatic create fieldName (_id)

const createToken_saveCookie = (userId, res) => {

    const token = jwt.sign({ userId }, process.env.SECRET_KEY, { expiresIn: "10d" });

    res.cookie("jwt", token, {
        httpOnly : true, // safe from xss attack
        secure : true,
        sameSite: "strict" // safe from csrf attack
    });    
        
}

export default createToken_saveCookie;