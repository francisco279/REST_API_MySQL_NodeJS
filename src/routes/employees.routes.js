//routes from the app
import {Router}        from "express"
import { createEmployee, deleteEmployee, getEmployee, getEmployes, updateEmployee } from "../controllers/employes.controllers.js";

const router = Router();
//get employees
router.get("/employees",         getEmployes)
//get employees by id
router.get("/employees/:id",     getEmployee)
//create employees
router.post("/employees",        createEmployee)
//update employees
router.patch("/employees/:id",   updateEmployee)
//delete employees
router.delete("/employees/:id",  deleteEmployee)

export default router;