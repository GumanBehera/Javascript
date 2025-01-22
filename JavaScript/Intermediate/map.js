const map = new Map();
map.set('In','India');
map.set('US','United States');
map.set('UK','United Kingdom');
map.set('JP','Japan');

for (const [key,value] of map) {
    // console.log(key,value);
    
}

const num = [1,2,3,4,5];
console.log(num.filter((num) => num >2));
