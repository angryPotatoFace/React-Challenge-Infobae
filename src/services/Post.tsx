export const getPost = async() => {
    try{
        const API_URL = import.meta.env.VITE_API_URL;
        const APP_ID = import.meta.env.VITE_APP_ID;
        console.log(API_URL)
        console.log(APP_ID);

        const response = await fetch( `${API_URL}/post`, {
            method: "GET",
            headers: {
            'app-id': APP_ID
            }
        });
        const data = await response.json();

        return data;
    }catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}