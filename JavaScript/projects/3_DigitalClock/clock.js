const clock = document.querySelector('#clock');

// this is a small program of digital clock 
setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
    // console.log(date.toLocaleTimeString());
},1000)