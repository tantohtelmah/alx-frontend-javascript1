export default function guardrail(mathFunction) {
    const queue = [];

    try {
        const result = mathFunction();
        queue.push(result);
    } catch (error) {
        queue.push(error.message);
    } finally {
        queue.push('Guardrail was processed');
    }

    return queue;
}

// Example usage:
function exampleMathFunction() {
    // Replace this with your actual math function
    return 1000;
}

const resultQueue = guardrail(exampleMathFunction);
console.log(resultQueue);
