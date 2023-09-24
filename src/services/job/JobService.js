import axios from "../axios";

class JobService {
  get() {
    return axios.get(`/job`);
  }

  find(id) {
    return axios.get(`/job/${id}`);
  }

  delete(id) {
    return axios.delete(`/job/${id}`);
  }

  update(id, job) {
    return axios.put(`/job/${id}`, job);
  }

  create(job) {
    return axios.post(`/job/`, job);
  }
}

export default new JobService();
