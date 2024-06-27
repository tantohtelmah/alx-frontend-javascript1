// Assuming utils.js is located in the same directory as your code
import { uploadPhoto, createUser } from './utils.js';

async function handleProfileSignup() {
    try {
        const [photoResponse, userResponse] = await Promise.all([
            uploadPhoto(),
            createUser()
        ]);

        console.log('Body:', photoResponse.body);
        console.log('First Name:', userResponse.firstName);
        console.log('Last Name:', userResponse.lastName);
    } catch (error) {
        console.error('Signup system offline');
    }
}

// Usage:
handleProfileSignup();
