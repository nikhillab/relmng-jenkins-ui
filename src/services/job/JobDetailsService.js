import axios from "../axios";

class JobDetailsService {
  get() {
    return axios.get(`/details`);
  }

  find(id) {
    return axios.get(`/details/${id}`);
  }

  delete(id) {
    return axios.delete(`/details/${id}`);
  }

  update(id, job) {
    return axios.put(`/details/${id}`, job);
  }

  create(job) {
    return axios.post(`/details/`, job);
  }
}

export default new JobDetailsService();
