let changeColorBtn = document.getElementById('change');
let wrapper = document.querySelector('.wrapper');
let h1 = document.querySelector('h1');


changeColorBtn.onclick = function() {
    let symbols = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += symbols[Math.floor(Math.random() * 16)];
    }
    h1.innerHTML = color;
    wrapper.style.backgroundColor = color;
    return color;
  };
  
  
  
  function setRandomColor() {
    $("#colorpad").css("background-color", getRandomColor());
  }



