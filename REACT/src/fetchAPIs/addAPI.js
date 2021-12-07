// import * as constants from "../constants"
export default function addApi(data) {
   
    return new Promise((resolve, reject) => {
        const url = `http://localhost:3001/tasks`
        console.log(url,"url");
        fetch(url, {
            method:'POST',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(data)

        })
            .then((response) => resolve(response.json()))
            .catch((error) => reject(error));
    });
}
