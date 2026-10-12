const users = [
    {
         width:50,
         height: 30
    },
    {
        width: 60,
        height: 30
    },
    {
        width: 80,
        height: 80
    }
]
const root = document.getElementById('wrapper');

function objToHTML(userObj){
    const rootEl = document.createElement('div');
    rootEl.classList.add('user')

    rootEl.style.width = `${userObj.width}px`;
    rootEl.style.height = `${userObj.height}px`;
    return rootEl
}
for (let i = 0; i < users.length; i++){
    const currentUserObj = users[i];
    const currentUserHTML = objToHTML(currentUserObj);
    root.appendChild(currentUserHTML)
}
