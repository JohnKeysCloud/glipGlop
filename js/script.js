const nameInput = document.getElementById('userName');
const enterBtn = document.getElementById('enterBtn');

enterBtn.addEventListener('click', nameAbbrev);
nameInput.addEventListener("keypress", (event) => {
    if (event.key === 'Enter') {
      nameAbbrev();
    }
});
  
function nameAbbrev() {
  let userName = nameInput.value;
  let response = document.getElementById('response');

  let firstLetter = userName.slice(0, 1).toUpperCase(); 
  let restOfName = userName.slice(1).toLowerCase();
  let userNameCaps = firstLetter.concat(restOfName);
  let userNameFinal = userNameCaps.replace(/[^a-zA-Z]/g, "");

  if (userNameFinal === null || userNameFinal === '') {
    response.innerHTML = `type your name dumbass`;
  } else {
    response.innerHTML = `Fuck you ${userNameFinal}.`;
  }
};