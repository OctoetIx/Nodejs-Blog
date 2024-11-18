import  axios from "axios";

const searchImages = async () => {
    const response = await axios.get('https://api.unsplash.com/search/photos' ,
    {
        headers: {
            Authorization: 'Client-ID yAVA6S4CUtcxSG53ir4gN55WBGjN8f88dBBpd5O-lkQ',},
            params: {
                query:'cars', },
    });

    console.log(response);
    return response;
}

export default searchImages;