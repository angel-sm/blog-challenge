import Axios from "axios";

export const entranceServices = {
  search: async (filter) => {
    return await Axios.get(
      `http://localhost:5000/entrances?filter=${filter ?? ""}`,
    );
  },

  find: async (id) => {
    return await Axios.get(`http://localhost:5000/entrances/${id}`);
  },

  save: async (data) => {
    return await Axios.post(`http://localhost:5000/entrances`, data);
  },
};
