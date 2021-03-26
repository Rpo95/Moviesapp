import Axios from 'axios';

class Networking {
    constructor() {
        this.axios = Axios.create();
        this.axios.defaults.baseURL="https://api.themoviedb.org/3"
    }

    getAxios=()=>{  
        return this.axios
    }
}

export const client = new Networking().getAxios();