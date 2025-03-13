import { Elysia } from "elysia";
import {UserController} from "@/controller/user.controller";

export const userRoutes = new Elysia()
    .post("/users", async ({ body }) => await UserController.createUser({ body }))
    .get("/users/:id", async ({ params }) => await UserController.getUser({ params }))
    .get("/users", async () => await UserController.getAllUsers());
