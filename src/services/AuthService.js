import apiClient from "../api/ApiClient";

class AuthService {
  static async singIn(data) {
    return await apiClient.post("auth/signin", data);
  }
  static async singUp(data) {
    return await apiClient.post("auth/signup", data);
  }
}

export default AuthService;
