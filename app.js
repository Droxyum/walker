const WIDTH_SCREEN = window.innerWidth
const HEIGHT_SCREEN = window.innerHeight

let car;
let cursor;

function setup() {
    createCanvas(WIDTH_SCREEN, HEIGHT_SCREEN)
    frameRate(30)
    car = new Car()
}

function draw() {
    background(0)
    drawCursor()

    if (cursor) {
        drawMidVector(cursor, car)
    }

    car.move(cursor)
}

function mousePressed() {
    cursor = createVector(mouseX, mouseY)
}

function mouseDragged() {
    cursor = createVector(mouseX, mouseY)
}


function drawCursor() {
    if (cursor) {
        fill(150)
        ellipse(cursor.x, cursor.y, 6, 6)
    }
}

function drawMidVector(cursor, car) {
    fill(100)
    noStroke()
    let cX = (cursor.x + car.position.x) / 2
    let cY = (cursor.y + car.position.y) / 2
    ellipse(cX, cY, 3, 3)
}



function Car() {
    this.width = 18
    this.height = 18

    this.position = createVector(random(0, width), random(0, height))
    this.velocity = 7

    this.move = function(target) {
        if (target) {
            let vector = createVector(target.x - this.position.x, target.y - this.position.y)
            let dVector = vector.mag()

            if (dVector > this.velocity) {
                let r = this.velocity / dVector
                let nVector = vector.mult(r)
                this.position = this.position.add(nVector)
            } else {
                this.position = target.copy()
            }
        }

        fill(250, 250, 250)
        ellipse(this.position.x, this.position.y, this.width, this.height)
    }
}