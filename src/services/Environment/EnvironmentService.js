import axios from "../axios";

class EnvironmentService {
  get() {
    return axios.get(`/environment`);
  }

  find(id) {
    return axios.get(`/environment/${id}`);
  }

  delete(id) {
    return axios.delete(`/environment/${id}`);
  }

  update(id, environment) {
    return axios.put(`/environment/${id}`, environment);
  }

  create(environment) {
    return axios.post(`/environment/`, environment);
  }
}

export default new EnvironmentService();
