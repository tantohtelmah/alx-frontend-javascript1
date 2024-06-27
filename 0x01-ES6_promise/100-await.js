import { uploadPhoto, createUser } from './utils.js';

async function asyncUploadUser() {
    try {
        const [photo, user] = await Promise.all([
            uploadPhoto(),
            createUser()
        ]);

        return {
            photo,
            user
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        return {
            photo: null,
            user: null
        };
    }
}

// Example usage:
asyncUploadUser()
    .then((result) => {
        console.log('User data:', result);
    })
    .catch((error) => {
        console.error('Error handling user data:', error);
    });
