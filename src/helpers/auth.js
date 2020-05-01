export function amILogged(){
    return window.document.cookie.includes('Authorization');
}

export function logout() {
    window.document.cookie='';
}