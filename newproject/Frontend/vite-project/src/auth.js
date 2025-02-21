import axios from "axios";

export class AuthService {
    async createAccount({ email, password, username, fullname }) {
        try {
            const userAccount = await axios.post('/api/v1/users/register', {
                email, password, username, fullname
            });
            return userAccount;
        } catch (error) {
            throw error;
        }
    }

    async login({ email, password }) {
        try {
            return await axios.post('/api/v1/users/login', {
                email, password,
            });
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            const response = await axios.get('/api/v1/users/currentUser');
            return response.data;
        } catch (error) {
            console.log("getCurrentUser :: error", error);
        }
        return null;
    }

    async logout() {
        try {
            await axios.post('/api/v1/users/logout');
        } catch (error) {
            console.log("logout :: error", error);
        }
    }
}

const authService = new AuthService();
export default authService;
