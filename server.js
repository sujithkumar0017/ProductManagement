// const express = require("express")
// const sequelize = require("./config/sequelize")
// const { use } = require("./routers/userRouter");
// const dotenv = require("dotenv").config()
// const errorHandler = require("./middleware/errorHandler")


// const app = express()
// app.use(express.json());

// async function connectDB() {
//     try {
//         await sequelize.authenticate();
//         console.log("Connection has been established successfully.");
//     } catch (error) {
//         console.error("Unable to connect to the database:", error);
//     }
// }



// app.use('/api/login',require("./routers/loginRouter"))
// app.use('/api/users',require("./routers/userRouter"))
// app.use('/api/roles',require("./routers/roleRouters"))
// app.use('/api/user-roles',require("./routers/userRolesRouter"))
// app.use('/api/category',require("./routers/categoryRouter"))
// app.use('/api/products',require('./routers/productsRouter'))

// // error middleware
// app.use(errorHandler);

// app.listen(3000, (req, res) => {
//     connectDB()
//     console.log("Server Started Successfully.")
// })

const express = require("express");
const sequelize = require("./config/sequelize");
const dotenv = require("dotenv").config();
const errorHandler = require("./middleware/errorHandler");

const app = express();
app.use(express.json());

async function connectDB() {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
}
app.use('/api/login', require("./routers/loginRouter"));
app.use('/api/users', require("./routers/userRouter"));
app.use('/api/roles', require("./routers/roleRouters"));
app.use('/api/user-roles', require("./routers/userRolesRouter"));
app.use('/api/category', require("./routers/categoryRouter"));
app.use('/api/products', require('./routers/productsRouter'));

// Add the errorHandler middleware after your routes
app.use(errorHandler);


app.listen(3000, () => {
    connectDB();
    console.log("Server Started Successfully.");
});

