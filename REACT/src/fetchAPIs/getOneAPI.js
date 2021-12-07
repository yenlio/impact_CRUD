// import * as constants from "../constants"
export default function GETaApi(id) {
 //   console.log(id,"ads");
   
    return new Promise((resolve, reject) => {
        const url = `http://localhost:3001/task/${id}`
        
        fetch(url, {
            method:'GET'
        })
            .then((response) => resolve(response.json()))
            .catch((error) => reject(error));
    });
}
