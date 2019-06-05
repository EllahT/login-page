var gShow;
var gSort;

function setSort(str) {
    var txt = (str.split(','))[0];
    var op = (str.split(','))[1];
    var sortingFunc = creatSortFunc(txt,op);
    gUsers.sort(sortingFunc);
    saveUsers();
}

function creatSortFunc(txt,op) {
    function sorting(a,b) {
        if (op === '+') {
            if (a[txt] > b[txt]) {
                return 1;
            } else if (a[txt] < b[txt]) {
                return -1;
            } else {
                return 0;
            }    
        } else {
            if (a[txt] < b[txt]) {
                return 1;
            } else if (a[txt] > b[txt]) {
                return -1;
            } else {
                return 0;
            }    
        } 
    }
    return sorting;
}

function getUsers() {
    createUsers();
    return gUsers;
}

function isAdmin(user) {
    if (!user || (user.userName !== 'Admin')) {
        location.assign('index.html');
    }
}
