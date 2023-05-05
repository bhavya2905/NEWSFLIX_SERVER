import mongoose from "mongoose";
 
const connectDB = (url)=>{
    console.log(url);
    mongoose.set('strictQuery',true);
    mongoose.connect(url, { writeConcern: { w: 'majority' } })
    .then(()=>{
        console.log('mongodb connected')
    }).catch((err)=>{
        console.log(err);
    }) 
}
export default connectDB;