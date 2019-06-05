function onInitPage() {
    var user = loadFromStorage('logedUser');
    if (user) onLogIn(true);
    createUsers();
    renderPage();
}

function renderPage() {
    var elLoggedUser = document.querySelector('.logged-user');
    elLoggedUser.innerHTML = (gLoggedInUser)? gLoggedInUser : 'guest';
    var elSafeCont = document.querySelector('.safe-content');
    var sHtml;
    if (getLogedInUser()) {
        sHtml = '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, rem iste aut illum optio dolore nulla reiciendis porro ipsum dolores autem nobis qui nesciunt cum excepturi fuga numquam quidem consequuntur?</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, rem iste aut illum optio dolore nulla reiciendis porro ipsum dolores autem nobis qui nesciunt cum excepturi fuga numquam quidem consequuntur?</p>'
        elSafeCont.innerHTML = sHtml;
    };
}

function onLogIn(isLogged) {
    (isLogged)? doLogIn(true): doLogIn(false);
    if (getLogedInUser()) {
        document.querySelector('.safe-content').classList.remove('hide');
        document.querySelector('.login-form').classList.add('hide');
        document.querySelector('.logout-button').classList.remove('hide');
    } else {
        alert('wrong user name or password');
    }
    
    if (getLogedInUser() === 'Admin') {
        document.querySelector('.admin-only').classList.remove('hide');
    }
    document.querySelector('[name="userName"]').value = '';
    document.querySelector('[name="password"]').value = '';
    renderPage();
}

function onLogOut() {
    doLogOut();
    document.querySelector('.safe-content').classList.add('hide');
    document.querySelector('.login-form').classList.remove('hide');
    document.querySelector('.logout-button').classList.add('hide');
    var elAdminLink = document.querySelector('.admin-only');
    if (!elAdminLink.classList.contains('hide')) elAdminLink.classList.add('hide');
    renderPage();
}

function onKeyBoard(eventKeyboard) {
    switch (eventKeyboard.code) {
        case 'Space':
        case 'Enter':
            onLogIn(false)
            break;
    }
}