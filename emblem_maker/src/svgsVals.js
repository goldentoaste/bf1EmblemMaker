import Circle from './svgs/Circle.svg'
import Dogtag from './svgs/Dogtag.svg'

class SvgContainer{
    constructor(name, width, height, path, src){
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

    
    'Dogtag':new SvgContainer("Dogtag", 316.719, 156.754, `M301.553,23.663c-10.354-13.306-19.895-23.56-36.648-23.56c-13.275,0-199.045,0-212.32,0
	c-16.755,0-26.296,10.254-36.649,23.56C0.385,43.646,0.385,78.479,0.385,78.479s0,34.833,15.55,54.816
	c10.354,13.307,19.895,23.561,36.649,23.561c13.275,0,199.045,0,212.32,0c16.754,0,26.295-10.254,36.648-23.561
	c15.551-19.983,15.551-54.816,15.551-54.816S317.104,43.646,301.553,23.663z M34.411,91.479c-7.18,0-13-5.82-13-13s5.82-13,13-13
	s13,5.82,13,13S41.591,91.479,34.411,91.479z`, Dogtag)
}

export {svgs, SvgContainer};
