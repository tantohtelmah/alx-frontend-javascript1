// Import signUpUser and uploadPhoto
import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

async function handleProfileSignup(firstName, lastName, fileName) {
    try {
        const [userResponse, photoResponse] = await Promise.all([
            signUpUser(firstName, lastName),
            uploadPhoto(fileName)
        ]);

        // Create an array with the desired structure
        const resultArray = [
            { status: 'resolved', value: userResponse },
            { status: 'resolved', value: photoResponse }
        ];

        return resultArray;
    } catch (error) {
        // Handle any errors (rejected promises)
        const errorObject = { status: 'rejected', value: error.message };
        return [errorObject];
    }
}

// Example usage:
handleProfileSignup('John', 'Doe', 'profile.jpg')
    .then((result) => {
        console.log('Profile signup result:', result);
    })
    .catch((error) => {
        console.error('Error handling profile signup:', error);
    });
