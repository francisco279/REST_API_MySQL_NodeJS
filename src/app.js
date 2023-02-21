import express         from "express";
import employeesRoutes from "./routes/employees.routes.js";
import indexRoutes     from "./routes/index.routes.js";
import "./config.js";

const app = express();

//middlewares
app.use(express.json());
//routes
app.use(indexRoutes);
app.use(employeesRoutes);

app.use((req, res, next) => {
    res.status(404).json(
        {
            message: "Not Found"
        }
    )
})

export default app;