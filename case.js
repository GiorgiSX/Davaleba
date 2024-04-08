function outerFunction() {
    let x = "Variable in outerFunction";

    function innerFunction() {
        console.log(x);
    }

    innerFunction();
}

outerFunction();
