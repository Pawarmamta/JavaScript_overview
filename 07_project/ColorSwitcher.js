const button = document.querySelectorAll('.button');
const body = document.querySelector('body');

button.forEach(function(button)
{
    button.addEventListener('click', function(e){
    console.log(e);
    console.log(e.target);
    if(e.target.id === 'red')
    {
        body.style.backgroundColor = e.target.id;
    }
     if(e.target.id === 'blue')
    {
        body.style.backgroundColor = e.target.id;
    }
     if(e.target.id === 'green')
    {
        body.style.backgroundColor = e.target.id;
    }
     if(e.target.id === 'orange')
    {
        body.style.backgroundColor = e.target.id;
    }

    
    })
});