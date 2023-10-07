import axios from "axios";

// const axios = require('axios')

export async function getData (){
    let data;
    await axios.get("http://127.0.0.1:8000/")
        .then(res=>{
            console.log("fetching data");
            data = res.data;
            return data.json()
        })
        .catch(err=>{
            return err.message
        })
        console.log(data);
}

// export default getData
// getData()