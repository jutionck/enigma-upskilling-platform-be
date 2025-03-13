import { Elysia } from "elysia";
import {userRoutes} from "@/routes/user.route";

export const routes = new Elysia().use(userRoutes);
