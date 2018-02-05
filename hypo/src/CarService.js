import axios from 'axios';



export class CarService {

 baseUrl="https://api.myjson.com/bins/1cf8jl";

    getCarsSmall() {
        return axios.get(this.baseUrl)
            .then(res => res.data);
    }

    getCarsMedium() {
        return axios.get(this.baseUrl)
            .then(res => res.data);
    }

    getCarsLarge() {
        return axios.get(this.baseUrl)
            .then(res => res.data);
    }
}