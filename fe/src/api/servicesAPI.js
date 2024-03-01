import apiClient from "./client";

const registerNewBusiness = async (data) =>
  apiClient.post("/businessRegistration", data);

const servicesAPI = {
    registerNewBusiness,
};

export default servicesAPI;