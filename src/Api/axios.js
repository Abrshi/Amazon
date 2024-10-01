import axios from "axios"

const axiosbaseurl=axios.create({
    baseURL:"http://127.0.0.1:5001/clone-aa1f7/us-central1/api"
})


export {axiosbaseurl};