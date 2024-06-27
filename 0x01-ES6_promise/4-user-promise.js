function signUpUser(firstName, lastName) {
    return Promise.resolve({
        firstName: firstName,
        lastName: lastName
    });
}

// Example usage:
signUpUser('John', 'Doe')
    .then((user) => {
        console.log('User details:', user);
    })
    .catch((error) => {
        console.error('Error signing up:', error);
    });
