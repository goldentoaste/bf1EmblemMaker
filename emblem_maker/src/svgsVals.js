import Circle from './svgs/Circle.svg'
import Dogtag from './svgs/Dogtag.svg'
import Shield from "./svgs/Shield.svg"
import Stroke from "./svgs/Stroke.svg"
import StrokeBent from "./svgs/StrokeBent.svg"
import Triangle from "./svgs/Triangle.svg"
class SvgContainer {
    constructor(name, width, height, path, src) {
        this.name = name;
        this.width = width;
        this.height = height;
        this.path = path;
        this.src = src;
    }
}

const svgs = {
    'Circle': new SvgContainer('Circle', 320, 320, `M159.5-0.5c-88.366,0-160,71.634-160,160c0,88.365,71.634,160,160,160c88.365,0,160-71.635,160-160
	C319.5,71.047,247.865-0.5,159.5-0.5z`, Circle),
    'Dogtag': new SvgContainer("Dogtag", 316.719, 156.754, `M301.553,23.663c-10.354-13.306-19.895-23.56-36.648-23.56c-13.275,0-199.045,0-212.32,0
	c-16.755,0-26.296,10.254-36.649,23.56C0.385,43.646,0.385,78.479,0.385,78.479s0,34.833,15.55,54.816
	c10.354,13.307,19.895,23.561,36.649,23.561c13.275,0,199.045,0,212.32,0c16.754,0,26.295-10.254,36.648-23.561
	c15.551-19.983,15.551-54.816,15.551-54.816S317.104,43.646,301.553,23.663z M34.411,91.479c-7.18,0-13-5.82-13-13s5.82-13,13-13
	s13,5.82,13,13S41.591,91.479,34.411,91.479z`, Dogtag),
    'Shield': new SvgContainer("Shield", 320, 320, "M160,320c0,0-80-16-128-64c0,0-32-32-32-96V0h320v160c0,0,0,64-32,96C288,256,240,304,160,320z", Shield),
    'Stroke': new SvgContainer("Stroke", 64, 320, "M0,0h64v320H0V0z", Stroke),
    'StrokeBent': new SvgContainer('StrokeBent', 96, 320, "M64,0C64,0,0,48,0,160s64,160,64,160h32c0,0-64-48-64-160S96,0,96,0H64z", StrokeBent),
    'Triangle': new SvgContainer('Triangle', 320, 320, "M160,0L0,320h320L160,0z", Triangle)
}

export { svgs, SvgContainer };
