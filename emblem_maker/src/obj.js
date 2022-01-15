
class CanvasObj{


    //max x, y, width, height are all 325 px
    //path is svg's path data, asset is the asset name to be passed to editor.
    //angle is in radiants
    constructor(x, y, width, height, path, assetName, flipX, flipY, angle, color, opacity){

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.path = path;
        this.assetName = assetName;
        this.flipX = flipX;
        this.flipY = flipY;
        this.angle = angle;
        this.color = color;
        this.opacity = opacity;
    }

    getBoundingBox(){
        return AABB();
    }

    toJsonObj(){

        return {
            opacity: this.opacity,
            angle: this.angle,
            flipX: this.flipX,
            flipY: this.flipY,
            top: this.y,
            height: this.height,
            width: this.width,
            asset: this.assetName,
            selectable: false,
        }
    }


}

class AABB{
    constructor(x1, y1, x2, y2){

    }

    get width(){
        return x2 - x1;
    }

    get height(){
        return y2 - y1;
    }
}



export default {CanvasObj, AABB};
