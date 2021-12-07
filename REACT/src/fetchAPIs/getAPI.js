// import * as constants from "../constants"
export default function getApi(data) {
   
    return new Promise((resolve, reject) => {
        const url = `http://localhost:3001/tasks`
        fetch(url, {
            method:'GET'
        })
            .then((response) => resolve(response.json()))
            .catch((error) => reject(error));
    });
}
