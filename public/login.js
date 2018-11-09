const login = function(event){
    event.preventDefaut();
    user = $('#login-username').val();

//local and session storage

//post request verify user /password (use post request to make it more secure)
localStorage.setItem('user',user);    
window.location.href= '/chat';

}

$('#login-btn').on('click', login);