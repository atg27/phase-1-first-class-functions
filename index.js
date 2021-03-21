function receivesAFunction(callback) {
     callback();
}

function returnsANamedFunction() {
    function namedFunx() {}
    return namedFunx
}

function returnsAnAnonymousFunction() {
    return () => {}
}