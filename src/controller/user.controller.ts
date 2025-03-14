import {UserService} from "@/service";

export const UserController = {
    async createUser(req: any) {
        try {
            const { name, email } = req.body;
            return await UserService.createUser(name, email);
        } catch (error: any) {
            return { error: error.message };
        }
    },

    async getUser(req: any) {
        try {
            const { id } = req.params;
            return await UserService.getUserById(id);
        } catch (error: any) {
            return { error: error.message };
        }
    },

    async getAllUsers() {
        return await UserService.getAllUsers();
    },
};