import api from "../../api";

const JoinService = {
  createJoinRequest: (data) => {
    return api.post("/join", data);
  },

  getJoinRequests: () => {
    return api.get("/admin/join-requests");
  }
};

export default JoinService;
