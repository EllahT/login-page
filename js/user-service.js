var gUsers;
var gLoggedInUser;

function createUsers() {
    var users = loadFromStorage('users')
    if (!users || !users.length) {
        users = [
            createUser('Admin','admin', true),
            createUser('User1','1234', false),
            createUser('User2','4321', false),
            createUser('User3','1234', false),
            createUser('User4','4321', false),
            createUser('User5','1234', false),
            createUser('User6','4321', false),
            createUser('User7','1234', false),
            createUser('User8','4321', false),
            createUser('User9','1234', false),
            createUser('User10','4321', false),
            createUser('User11','1234', false),
            createUser('User12','4321', false),
            createUser('User13','1234', false),
            createUser('User14','4321', false),
            createUser('User15','1234', false),
            createUser('User16','4321', false),
            createUser('User17','1234', false),
            createUser('User18','4321', false),
            createUser('User19','1234', false),
        ]
    }
    
    gUsers = users;
    saveUsers();
}

function createUser(userName, password, isAdmin) {
    return {
        id: makeId(),
        userName: userName,
        password: password,
        lastLogginTime: getTimeStamp(),
        isAdmin: isAdmin
    }
}

function saveUsers() {
    saveToStorage('users', gUsers)
}

function doLogIn(isLogged) {
    var userName;
    if (isLogged) {
        userName = (loadFromStorage('logedUser')).userName;
    } else {
        userName = document.querySelector('[name="userName"]').value;
        var password = document.querySelector('[name="password"]').value;
        var user = gUsers.find(function(user) {
            return (user.userName === userName && user.password === password);
        })
        
        if (user) {
            user.lastLogginTime = getTimeStamp();
            saveToStorage('logedUser',user);
            saveUsers();
        }
    }
    gLoggedInUser = userName;
}

function doLogOut() {
    gLoggedInUser = null;
    clearFromStorage('logedUser')
}

function getLogedInUser() {
    return gLoggedInUser;
}


