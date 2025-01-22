const form = document.querySelector('form');

form.addEventListener('submit', function (event){
    event.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    const category = document.querySelector('#category');  

    if (height == '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please enter a valid numvber ${height}`;
    }else if ( weight == '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please enter a valid numvber ${weight}`;
    }else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        if (bmi < 18.6){
            results.innerHTML = `<span>${bmi}  The user is under weight </span>`
        } else if (bmi >= 18.6 && bmi <= 24.9){
            results.innerHTML = `${bmi} The user is normal `
         } else {
            results.innerHTML = `${bmi} The user is over weight  `
        }
    }
});