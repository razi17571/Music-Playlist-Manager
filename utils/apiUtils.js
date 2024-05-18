// Function to fetch data from an external API
exports.fetchDataFromAPI = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch data from API');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Failed to fetch data from API');
    }
};
