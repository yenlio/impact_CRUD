 import { LIMIT } from "../constants";
export default function pagiApi(activePage) {
   
    return new Promise((resolve, reject) => {
        const url = `http://localhost:3001/pagination?activePage=${activePage}&limit=${LIMIT}`
        fetch(url, {
            method:'GET'
        })
            .then((response) => resolve(response.json()))
            .catch((error) => reject(error));
    });
}
