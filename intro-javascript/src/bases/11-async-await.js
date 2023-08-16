console.log('??')

const getImage = async () =>{
    try {
        const apiKey = process.env.apiKey;
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json();
        //console.log(data)
        const {url } = data.images.original
        const img = document.createElement('img');
        img.src= url;
        document.body.append(img)
        
    } catch (error) {
        //manejo del error
        console.error(error)
    }
    
}
getImage()
