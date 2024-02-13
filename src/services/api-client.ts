import axios from "axios"

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "9864411c588641799cddd6a546fe019a",
  },
})
