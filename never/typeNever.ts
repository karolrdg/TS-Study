/*// Function that throws an error
function throwError(message: string): never {
    throw new Error(message);
}

// Function that runs an infinite loop
function infiniteLoop(): never {
    while (true) {}
}

// Example of a function that returns never due to exhaustive checks
type SomeType = 'A' | 'B' | 'C';

function checkType(value: SomeType): string {
    switch (value) {
        case 'A':
            return 'Type A';
        case 'B':
            return 'Type B';
        case 'C':
            return 'Type C';
        default:
            const exhaustiveCheck: never = value;
            return exhaustiveCheck; // This line will never be reached
    }
}

*/