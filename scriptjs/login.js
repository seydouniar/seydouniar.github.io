window.fbAsyncInit = function() {
    FB.init({
        appId            : '1234485940017070',
        autoLogAppEvents : true,
        xfbml            : true,
        version          : 'v2.12'
    });
    FB.getLoginStatus(function(response){
        if(response.status == 'connected'){
            document.getElementById('status').innerHTML = "hello"
        }else if(response.status =='not_autorized'){
            document.getElementById('status').innerHTML = "non autorizer"
        }else{
            document.getElementById('status').innerHTML = "not in face"
        }
    });
};

(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
