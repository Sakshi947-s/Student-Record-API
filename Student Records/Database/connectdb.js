import mongoose from "mongoose"
const connectDB = async (DATABASE_URL) => {
    try {
        const DB_OPTION = {
           
            dbName: "studentrecords",
        };

        const Data = await mongoose.connect(DATABASE_URL, DB_OPTION);
        if (Data) {
            console.log("Connection successful");
        } else {
            console.log("Connection failed");
        }
    } catch (error) {
       
        console.log(error.message);
    }
};

export default connectDB
