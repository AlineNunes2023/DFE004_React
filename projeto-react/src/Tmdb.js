const API_KEY = '33f98ec2ffd298355d1f0f2f8f371158';
const API_BASE = 'https://api.themoviedb.org/3';


const basicFetch = async (endpoint) => {
const req = await fetch (`${API_BASE}${endpoint}`);

const json = await req.json();
return json;

}

export default {


getHomeList: async () => {
    return [

        { 
        slug: "originais",
        title: "Originais do Netflix",
        items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)

        },

        
        { 
            slug: "trending",
            title: "Recomendados para você",
            items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
    
            },

            
        { 
            slug: "tropated",
            title: "Em alta",
            items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
    
            },


        ]
    }

}
