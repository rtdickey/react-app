import apiClient from "./api-client";

export interface User {
  id: number;
  name: string;
}

class UserService {
  getAllUsers() {
    const controller = new AbortController();
    const request = apiClient.get<User[]>("/users", {
      signal: controller.signal,
    });
    return { request, cancel: () => controller.abort() };
  }

  addUser(newUser: User) {
    return apiClient.post("/users", newUser);
  }

  deleteUser(userId: number) {
    return apiClient.delete("/users/" + userId);
  }

  updateUser(user: User) {
    return apiClient.patch("/users/" + user.id, user);
  }
}

export default new UserService();
