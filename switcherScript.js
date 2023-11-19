const main  = document.querySelector('.main')

fetch('./data.json')
.then((response)=>response.json())
.then((data)=>{
    
data.users.forEach(user => {
    const message=document.createElement('p');
    message.innerText=user.message;
    const name=document.createElement('h2');
    name.innerText=user.name;
    const image=document.createElement('img');
    image.setAttribute('src',user.profile_image);

    const text=document.createElement('div');
    text.classList.add('text');
    const textAndImage=document.createElement('div');
    textAndImage.classList.add('textAndImage');

    text.appendChild(name);
    text.appendChild(message);
    textAndImage.appendChild(image);
    textAndImage.appendChild(text);
    main.appendChild(textAndImage);
   
});

}
);