import axios from "axios"

export class AuthService {
   
      

    async login({username, password}) {
        try {

            const response= await axios.post('/api/v1/users/login', {
        username,
        password,
      });
      console.log("response",response);
      
      return response
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            const response= await axios.get('/api/v1/users/currentUser')
            return response.data
        } catch (error) {
            console.log(" getCurrentUser :: error", error);
        }

        return null;
    }

    async logout() {

        try {
            await axios.post('/api/v1/users/logout');
        } catch (error) {
            console.log(" :: error", error);
        }
    }
}

const authService = new AuthService();

export default authService


