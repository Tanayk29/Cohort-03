class Rectangle {
    constructor(width, height,color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    area(){
        const area = this.width * this.height;
        return area;
    }

    paint(){
        console.log(`Painting with color ${this.color}`)
    }
}

const rect = new Rectangle(2,5,"blue");

const area  = rect.area();

rect.paint();  // Output -> Painting with color blue  (method chaining)  -  This is a common practice in JavaScript to make code more readable and maintainable.  However, it's not required in this case.  The same can be achieved by calling the method separately.  rect.paint(); rect.area();  or even rect.paint().area();  The choice depends on personal preference.  For simplicity, I've used method chaining in this example.

console.log(area);

//OUTPUT -> 10

//CALLBACKS

function callback1(){
    console.log("Some time has passed")
}

setTimeout(callback1, 1000);


// PROMISES

function setTimeoutPromisified(ms){  //ms means miliseconds
    
}

function callback(){
    console.log("3 seconds have been passed")
}

setTimeoutPromisified(3000).then(callback)