'use strict';


function DomElement(selector, height, width, bg, fontSize){
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
}

DomElement.prototype.create = function(){
    let newDiv = document.createElement('div');
    console.log(Array.from(this.selector)[0]);
    newDiv.innerHTML = 'Hello world for example';

    newDiv.style.cssText=`height:${this.height};
    width: ${this.width};
     background: ${this.bg};
    font-size: ${this.fontSize};
    display: flex;
    align-items: center;
    justify-content: center;
  `;

    if(Array.from(this.selector)[0] === '#'){
    newDiv.id = this.selector;
} else if (Array.from(this.selector)[0] === '.'){
    newDiv.className = (this.selector);
}
    document.body.append(newDiv);
    console.log(newDiv.style.cssText);
};

let newEl = new DomElement('.testid', '300px', '500px', 'green', '40px');
console.log(newEl);

newEl.create();

// DomElement.prototype.createElement();