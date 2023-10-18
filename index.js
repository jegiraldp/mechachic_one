import express from "express";
import cors from "cors";
import { PORT } from "./config.js";
import indexRoutes from "./routes/index.routes.js";
import categoriesRoutes from "./routes/categories.routes.js";
import elementsRoutes from "./routes/elements.routes.js";
import personsRoutes from "./routes/persons.routes.js";
import conceptstypeRoutes from "./routes/conceptstype.routes.js";
import payrollsRoutes from "./routes/payrolls.routes.js";
import conceptsRoutes from "./routes/concepts.routes.js";
import vehiculestypeRoutes from "./routes/vehiculestype.routes.js";
import vehiculesRoutes from "./routes/vehicules.routes.js";
import schedulesRoutes from "./routes/schedules.routes.js";
import budgetsRoutes from "./routes/budgets.routes.js";
import repairsorderRoutes from "./routes/repairsorder.routes.js";
import servicesRoutes from "./routes/services.routes.js";
import ordersdetailRoutes from "./routes/ordersdetail.routes.js";
import boxesRoutes from "./routes/boxes.routes.js";
import buyesRoutes from "./routes/buyes.routes.js";
import salesRoutes from "./routes/sales.routes.js";
import salesdetailRoutes from "./routes/salesdetail.routes.js";
import usersRoutes from "./routes/users.routes.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(indexRoutes);
app.use(categoriesRoutes);
app.use(elementsRoutes);
app.use(personsRoutes);
app.use(conceptstypeRoutes);
app.use(payrollsRoutes);
app.use(conceptsRoutes);
app.use(vehiculestypeRoutes);
app.use(vehiculesRoutes);
app.use(schedulesRoutes);
app.use(budgetsRoutes);
app.use(repairsorderRoutes);
app.use(servicesRoutes);
app.use(ordersdetailRoutes);
app.use(boxesRoutes);
app.use(buyesRoutes);
app.use(salesRoutes);
app.use(salesdetailRoutes);
app.use(usersRoutes);

app.listen(PORT);
console.log("Server Running on port.. " + PORT);
