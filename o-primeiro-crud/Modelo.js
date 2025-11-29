import mongoose from "mongoose" ;

const UserInfoSchema = new mongoose.Schema({
    nome:String,
    idade:Number,
});

export default mongoose.model('UserInfo' , UserInfoSchema);
