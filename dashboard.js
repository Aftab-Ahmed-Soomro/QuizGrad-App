const data = JSON.parse(localStorage.getItem('userData'));

let userProfile = document.getElementById('userProfile');

let name = document.getElementById('name');

const showProfile = () => {
    const {user, profile} = data;
    name.innerText = user; 
    userProfile.src = profile;
}

showProfile();

const logOut = () => {
    localStorage.clear();
    window.location.href = 'index.html';
}