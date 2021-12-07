// import * as constants from "../constants"
export default function updateApi(data) {
   
    return new Promise((resolve, reject) => {
        const url = `http://localhost:3001/task/${data.id}`
        
       
        fetch(url, {
            method:'PUT',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(data)


        })
            .then((response) => resolve(response.json()))
            .catch((error) => reject(error));
    });
}
