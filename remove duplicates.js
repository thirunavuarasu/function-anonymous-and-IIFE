(function () {
  
    let numbers = [1, 2, 3, 2, 4, 5, 5, 6];
    
    let duplicates = numbers.filter((num, index) => index !== numbers.indexOf(num));
    
    console.log(duplicates);
  })()
  