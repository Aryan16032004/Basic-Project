import axios from "axios";

export class DatabaseService {
  // Get the class details for the logged-in user
  async getUserClass() {
    try {
      return await axios.get('/api/v1/users/getUserClass');
    } catch (error) {
      throw error;
    }
  }

  // Get the courses for the user's class
  async getUserCourses() {
    try {
      return await axios.get('/api/v1/users/getUserCourses');
    } catch (error) {
      throw error;
    }
  }

  // Get topics for a specific course using the courseId parameter
  async getUserTopics(courseId) {
    try {
      return await axios.get(`/api/v1/users/getUserTopics/${courseId}`);
    } catch (error) {
      throw error;
    }
  }

  async getTopic(topicId) {
    try {
      return await axios.get(`/api/v1/users/getTopic/${topicId}`);
    } catch (error) {
      throw error;
    }
  }

}


// Create an instance of the DatabaseService
const databaseService = new DatabaseService();

export default databaseService;
