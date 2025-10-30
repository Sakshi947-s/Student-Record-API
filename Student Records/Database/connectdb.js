import mongoose from "mongoose"
const connectDB = async (DATABASE_URL) => {
    try {
        const DB_OPTION = {
            // Use a database name without spaces to avoid invalid namespace errors
            dbName: "studentrecords",
        };

        const Data = await mongoose.connect(DATABASE_URL, DB_OPTION);
        if (Data) {
            console.log("Connection successful");
        } else {
            console.log("Connection failed");
        }
    } catch (error) {
        // Log the actual error message
        console.log(error.message);
    }
};

export default connectDB