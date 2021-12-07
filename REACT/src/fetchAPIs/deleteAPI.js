// import * as constants from "../constants"
export default function deleteApi(id) {
   
    return new Promise((resolve, reject) => {
        const url = `http://localhost:3001/task/${id}`
        fetch(url, {
            method:'DELETE'
        })
            .then((response) => resolve(response.json()))
            .catch((error) => reject(error));
    });
}
