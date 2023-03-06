import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com"


export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '5012b61611msh373c88edfc05c0dp18435ajsne84b2c156c00',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
        
    });
    return data
}