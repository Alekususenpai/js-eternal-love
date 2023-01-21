function greet(firstname, lastname, language) {
    language = language || 'en';

    if (language === 'en') {
        console.log('Hi ' + firstname + ' ' + lastname);
    }

    if (language === 'es') {
        console.log('Hola ' + firstname + ' ' + lastname);
    }

}

function englishGreet(firstname, lastname) {
    greet(firstname, lastname, 'en');
}

englishGreet('Alekusu', 'Jov');


function spanishGreet(firstname, lastname) {
    greet(firstname, lastname, 'es');
}

spanishGreet('Alekusu', 'Jov');
