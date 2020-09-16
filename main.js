document.addEventListener("DOMContentLoaded", function(event){
'use strict';
let newDiv = document.createElement('div');

function DomElement(selector, height, width, bg, fontSize){
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
}

DomElement.prototype.create = function(){
    let newDiv = document.createElement('div');
    newDiv.innerHTML = '';

    newDiv.style.cssText=`height:${this.height};
    width: ${this.width};
     background: ${this.bg};
    position: absolute;
  `;

    if(Array.from(this.selector)[0] === '#'){
    newDiv.id = this.selector;
} else if (Array.from(this.selector)[0] === '.'){
    newDiv.className = (this.selector);
}
    document.body.append(newDiv);
    
    let count = 0;
    let countTop = 0;
    window.onkeydown = (e) => {
       
        if(e.keyCode === 39) {
            count = count + 10;
            newDiv.style.marginLeft = count + 'px';
        } else if (e.keyCode === 37 && count >= 0) {
            count = count - 10;
            newDiv.style.marginLeft = count + 'px';
        } else if (e.keyCode === 38  && countTop >= 0) {
            countTop = countTop - 10;
            newDiv.style.marginTop = countTop + 'px';
        } else if (e.keyCode === 40) {
            countTop = countTop + 10;
            newDiv.style.marginTop = countTop + 'px';
        }
    
    };
   
    
};

let newEl = new DomElement('.testid', '100px', '100px', 'green', '40px');


    newEl.create();


});
