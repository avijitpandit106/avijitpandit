    import mongoose from "mongoose";

    const connectDB = async () => {
    try {
        if(mongoose.connection.readyState === 0) {
            await mongoose.connect(process.env.MONGODB_URI!);
            console.log("MongoDB connected successfully");
        }
    } catch (error) {
        console.error("Failed to connect to MongoDB", error);
    }
    }

    export default connectDB;