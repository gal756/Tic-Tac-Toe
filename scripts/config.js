function openPlayerConfig(){
    playerConfigOverlay.style.display = 'block';
    backdropObject.style.display = 'block';
}

function closePlayerConfig(){
    playerConfigOverlay.style.display = 'none';
    backdropObject.style.display = 'none';
    formElement.firstElementChild.classList.remove('error');
    errorOutputElement.textContent ='';
}

function savePlayerConfig(event){
    event.preventDefault();
    const formData = new FormData(event.target);
    const enteredPlayerName = formData.get('username').trim();
    if (!enteredPlayerName){
        event.target.firstElementChild.classList.add('error');
        errorOutputElement.textContent = "Please enter a valid name!";
        return;
    }

}