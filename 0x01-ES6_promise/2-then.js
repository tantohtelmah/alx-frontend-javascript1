function handleResponseFromAPI(promise) {
    promise
        .then((result) => {
            // When the Promise resolves
            console.log('Got a response from the API');
            return {
                status: 200,
                body: 'success'
            };
        })
        .catch((error) => {
            // When the Promise rejects
            console.error('Error fetching data:', error.message);
            return new Error();
        });
}

// Example usage:
const myPromise = getFullResponseFromAPI(true); // Assuming you have a getFullResponseFromAPI function
handleResponseFromAPI(myPromise);
