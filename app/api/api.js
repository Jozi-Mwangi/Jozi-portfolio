import axios from "axios";

// const axios = require('axios')

export async function getData (){

    try {
        const response = await axios.get("http://127.0.0.1:8000/projects/");
        console.log("From Backend");
        console.log(response.data);
;
        return response.data

    } catch (error) {
        console.error(error.message);
        throw error;
    }
}

// export default getData
getData()
