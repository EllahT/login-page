function onInitAdmin() {
    isAdmin(loadFromStorage('logedUser'));
    renderAdmin();
}

function renderAdmin() {
    var gUsers = getUsers();
    if (!gSort) setSort('userName,+');
    (!gShow)? onShowChange('table') : onShowChange(gShow);
}

function renderTable(users, elMainContainer) {
    var html = '<table><thead><tr><th>User Name</th><th>Last Log In</th></tr></thead><tbody class= "users-table">';

    var strHtmls = users.map(function(user){
        return `<tr><td>${user.userName}</td><td>${user.lastLogginTime}</td></tr>`
    })
    
    html+=strHtmls.join('');
    html+='</tbody></table>';

    elMainContainer.innerHTML = html;
}

function renderDivs(users, elMainContainer) {
    var html = '<section class="users-divs">'

    var strHtmls = users.map(function(user){
        return `<div class="user-div"><span class="user-name">${user.userName}</span><br><span class="last-login">Last Log In Time: </span>${user.lastLogginTime}<div class="userImage"></div></div>`
    })
    
    html+=strHtmls.join('');
    html+='</section>';

    elMainContainer.innerHTML = html;
}

function onSetSort(str) {
    gSort = str;
    setSort(str);
    renderAdmin();
}

function onAdminLinkClick() {
    document.querySelector('.admin-only').classList.add('hide');
    location.assign('admin.html');
}

function onShowChange(val) {
    var elMainContainer = document.querySelector('.main-container');
    gShow = val;
    (gShow === 'table')? renderTable(gUsers, elMainContainer) : renderDivs(gUsers, elMainContainer);
}