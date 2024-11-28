import mongoose from "mongoose";

// Create Users Schema (This will word as database)

const userSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    confirmPassword: {
        type: String,
        required: false // false because we don't store confirmPass in database
    }
}, {timestamps : true}) //createAt & updatedAt

// ### Convert Schema to Model

// assign model to a variable User
// mongoose.model(< Give a model name >,< Write here your schema name which you create >)

const User = mongoose.model("User", userSchema);

// Model name is a collection (table) for MongoDB

export default User;