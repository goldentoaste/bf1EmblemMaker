const print = (...item) => {
    console.log(...item)
}
class CanvasObj{
    //max x, y, width, height are all 325 px
    //path is svg's path data, asset is the asset name to be passed to editor.
    //angle is in radiants
    constructor(x, y, width, height, path, assetName, flipX, flipY, angle, color, opacity){
        this.position = new Vector2(x, y); //pos is upper left corner.
        this.size = new Vector2(width, height);
        this.path = new Path2D(path);
        this.assetName = assetName;
        this.flipX = flipX;
        this.flipY = flipY;
        this.angle = angle;
        this.color = color;
        this.opacity = opacity;
    }

    get x(){return this.position.x;}
    get y(){return this.position.y;}
    get width(){return this.size.x;}
    get height(){return this.size.y;}

    draw(context){
        //render the svg file on canvas.

        context.fillStyle = this.color;
        context.setTransform(1, 0, 0, 1, this.x, this.y );
        context.fill(this.path);
        context.setTransform(1, 0, 0, 1, 0, 0 ); //reset the transform to not cause unwanted effects
        
    }

    drawBoundBox(context){
        //draw a rotated bounding box for this object.
        let center = this.position.add(this.size.mul(0.5)); //move upper left corner by half of size to get to center.
        let upperleft = this.position.rotateAround(this.angle, center);
        let upperRight = this.position.add(new Vector2(this.width, 0)).rotateAround(this.angle, center);
        let botLeft = this.position.add(new Vector2(0, this.height)).rotateAround(this.angle, center);
        let botRight = this.position.add(this.size).rotateAround(this.angle, center);

        context.setStrokeStyle("#aadaff");
        context.lineCap = "round";
        context.lineJoin = "round";

        context.moveTo(upperleft.x, upperleft.y);
        context.beginPath();
        context.lineTo(upperRight.x, upperRight.y);
        context.lineTo(botRight.x, botRight.y);
        context.lineTo(botLeft.x, botLeft.y);
        context.lineTo(upperleft.x, upperleft.y);

        context.stroke();
        //done!
    }

    toJsonObj(){
        return {
            opacity: this.opacity,
            angle: Vector2.r2d(this.angle),
            flipX: this.flipX,
            flipY: this.flipY,
            top: this.y,
            height: this.height,
            width: this.width,
            asset: this.assetName,
            selectable: false,
            left: this.x,
            fill : this.color
        }
    }
}

class Vector2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static get zero() {
        return new Vector2(0, 0);
    }

    static r2d(rad) {
        //converts radian into degrees
        return 360 * rad / (2 * Math.PI);
    }

    static d2r(deg) {
        return (deg / 360) * 2 * Math.PI;
    }

    rotateAround(angle, pivot){
        //rotate this vector by angle, around pivot point, another vector2
        return angle.add(pivot.mul(-1)).rotate(angle).add(pivot);
    }

    rotate(angle) {
        //rotates this vector by angle in radians, then return the rotated vector.

        let cos = Math.cos(angle);
        let sin = Math.sin(angle)

        let x = 0;
        let y = 0;

        x = this.x * cos - this.y * sin;
        y = this.x * sin + this.y * cos;

        return new Vector2(x, y);
    }
    
    mag() {
        return Math.sqrt(this.x ** 2 + this.y ** 2);
    }

    angle() {
        //returns angle relative to x-axis in radians
        return Math.atan2(this.y, this.x);
    }

    dot(v2) {
        //returns the dot product of the 2 vectors, does not change either.
        return (this.x * v2.x) + (this.y * v2.y);
    }

    add(vec) {
        //adds another vector onto this one, and return result

        return new Vector2(this.x + vec.x, this.y + vec.y);
    }

    mul(float) {
        //mutipleis this vector with a float, and returns result

        return new Vector2(float * this.x, float * this.y);
    }

    distTo(vec) {
        return vec.add(this.mul(-1)).mag();
    }

    normalized() {
        //returns the direction of this vector with unit length.
        let mag = this.mag()
        if (mag === 0) {
            return Vector2.zero;
        }
        return new Vector2(this.x / mag, this.y / mag);
    }

    toString() {
        return `Vector2 (${this.x} , ${this.y})`
    }
}



export default CanvasObj;
