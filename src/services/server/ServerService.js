import axios from "../axios";

class ServerService {
  get() {
    return axios.get(`/server`);
  }

  find(id) {
    return axios.get(`/server/${id}`);
  }

  delete(id) {
    return axios.delete(`/server/${id}`);
  }

  update(id, server) {
    return axios.put(`/server/${id}`, server);
  }

  create(server) {
    return axios.post(`/server/`, server);
  }
}

export default new ServerService();
