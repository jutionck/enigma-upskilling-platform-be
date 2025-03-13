import {User} from "@/model/entity/user.model";

export const UserService = {
    async createUser(name: string, email: string) {
        if (!name || !email) throw new Error("Name and Email are required");
        return await User.createUser(name, email);
    },

    async getUserById(id: string) {
        if (!id) throw new Error("User ID is required");
        return await User.getUserById(id);
    },

    async getAllUsers() {
        return await User.getAllUsers();
    },
};