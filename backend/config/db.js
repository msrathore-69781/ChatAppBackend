const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                w: 'majority',
                // useFindAndModify: true
            });

        console.log(`mongoDb connected : ${conn.connection.host}`.green.bold);


    }
    catch (error) {
        console.log(`Error : ${error.message}`.rainbow.bold);
        process.exit();

    }
};

module.exports=connectDB;