// ClassRoom.test.js
import ClassRoom from './0-classroom'; // Adjust the path based on your project structure

describe('ClassRoom', () => {
    it('should create an instance with the correct maxStudentsSize', () => {
        const maxStudentsSize = 30;
        const classroom = new ClassRoom(maxStudentsSize);

        expect(classroom._maxStudentsSize).toBe(maxStudentsSize);
    });

    // Add more test cases for other methods if needed
});
