// Create a receivesfuction with callback as an argument

function receivesAFunction(callback) {
    callback();
}

// Returns a named function
function returnsANamedFunction() {
    return function namedFunction() {
        console.log('This is a named function.');
    };
}

// Returns an anonymous function
function returnsAnAnonymousFunction() {
    return function() {
        console.log('This is an anonymous function.')
    }
}