const API_KEY = '33f98ec2ffd298355d1f0f2f8f371158';
const API_BASE = 'https://api.themoviedb.org/3';


const basicFetch = async (endpoint) => {
const req = await fetch (`${API_BASE}${endpoint}`);

const json = await req.json();
return json;

}

export default {

}
getHomeList: async () => {
  return [
  }

{

slug: 'orginiais',
Title: 'Originais',
items: await basicFetch (`/movie/list?language=en', optionsapi_key${API_KEY}`)

]

}



  
