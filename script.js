var displayName = document.querySelector('#name');
var removeName1 = document.querySelector('.removeName1');
var removeName2 = document.querySelector('.removeName2');

var numLikes = 500;
var numLikesConnections = document.querySelector("#numLikesConnections");
numLikesConnections.innerHTML = numLikes;
var numRequests = 2;
var numRequestsConnections = document.querySelector("#numRequestsConnections");
numRequestsConnections.innerHTML = numRequests;

function updateProfile(){
    displayName.innerText = "James Doe";
}

function disappear(element){
    if(element==removeName1){
        element.remove();
    }else{
        element.remove();
    }
}


function increaseLikes(){
    numLikes++;
    numLikesConnections.innerHTML = numLikes;
}

function decreaseRequests(){
    numRequests--;
    numRequestsConnections.innerHTML = numRequests;


}