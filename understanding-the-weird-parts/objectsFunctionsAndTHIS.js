// Targeting the global object --> Window

console.log(this);

function alekusu() {
    console.log('Function statment');
    console.log(this);
}

var value = function () {
    console.log('Function expression');
    console.log(this);
}

alekusu();
value();




// In objects, it is targeting the object and we can tackle the property from a function

var obj = {
    firstname: 'Alekusu',
    dev: true,
    greet: function () {
        this.firstname = 'Changed Alekusu'
        console.log(this)
    }
}

obj.greet();




// THIS in the function WITHIN the function *greet* , is pointing to the window and not the object!

var obj2 = {
    firstname: 'Alekusu2',
    greet: function () {
        var setname = function (newname) {
            this.firstname = newname;
            // firstname is actually added to the window object
            //if we log window.firstname, we can find the property
        }
        setname('Someone');
        console.log(this);
    }
}

obj2.greet();




// The solution for it:

var obj3 = {
    firstname: 'Alekusu2',
    greet: function () {

        // Setting THIS to point to the object and this way we make sure that we set the property to the object
        var self = this;

        var setname = function (newname) {
            self.firstname = newname;
            // firstname is now added to the object!
        }
        setname('Someone');
        console.log(this);
    }
}

obj3.greet();