let fn = function (){ 
    console.log(this === window);
};

fn(); // true
