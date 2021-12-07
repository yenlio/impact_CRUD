import { LIMIT } from "../constants";

// import * as constants from "../constants"
export default function searchApi(data) {
    // console.log(data,"dataaa");
   
    return new Promise((resolve, reject) => {
        const url = `http://localhost:3001/search?activePage=${data.activePage}&limit=${LIMIT}&q=${data.textSearch}`
        // console.log(data,"fetch");
        fetch(url, {
            method:'GET'
        })
            .then((response) => resolve(response.json()))
            .catch((error) => reject(error));
    });
}
