function getFullResponseFromAPI(success) {
    return new Promise((resolve, reject) => {
        if (success) {
            resolve({
                status: 200,
                body: 'Success'
            });
        } else {
            reject(new Error('The fake API is not working currently'));
        }
    });
}

// Usage:
getFullResponseFromAPI(true)
    .then((result) => {
        console.log('API response:', result);
    })
    .catch((error) => {
        console.error('Error fetching data:', error.message);
    });
