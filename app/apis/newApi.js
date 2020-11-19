import appCLient from './client'

const getAll = async () => {
    try {
        const res = await appCLient.get('/news')
        if (res.data.success) {
            return res.data.news
        }
    } catch (err) {
        console.log("errror getting all news", err.message);
        return []
    }
};

const getByCat = async(cat, qty) => {
    const endpoint = qty ? `/news/${cat}/${qty}` : `/news/${cat}`
    try {
        const res = await appCLient.get(endpoint)
        
        if (res.data.success) {
            return res.data.news
        }
    } catch (err) {
        console.log("errror getting cat news", err.message);
        return []
    }

}


export default {
    getAll,
    getByCat
}