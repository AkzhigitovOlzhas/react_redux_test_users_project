import apiClient from "../api/ApiClient";

class UsersService {
  static getAllUsers = async () => apiClient.get("/users");
  static getMe = async () => apiClient.get("/users/me");
}

export default UsersService;
