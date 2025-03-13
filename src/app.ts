import { Elysia } from "elysia";
import { routes } from "@/routes";

const app = new Elysia().use(routes);

app.listen(3000, () => {
    console.log(`🚀 Server running at http://localhost:3000`);
});
