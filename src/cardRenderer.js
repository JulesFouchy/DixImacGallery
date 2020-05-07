import p5 from 'p5'
import axios from 'axios'

const baseURL = 'http://diximac.herokuapp.com/client/cards' // 'http://localhost:2000/client/cards'

export default async ({fileName, fileFolder, generationMethod}) => {
    const url = baseURL + '/' + fileFolder + '/' + fileName
    switch (generationMethod) {
        case 0: // static image file (jpeg/png/...)
            return url
        case 1: // p5 script
            const file = (await axios.get(url)).data
            //console.log(file)
            //console.log(imageFromP5script(file, 0))
            //.catch(err => console.log(err))
            p5ForScripts.drawScript(file, Math.random()*10000000)
            return p5ForScripts.getfuData()
        case 2: // fragment shader
            const file2 = (await axios.get(url)).data
            //console.log(imageFromFragmentShader(file2, 0))
            p5ForFragmentShaders.drawShader(file2, Math.random())
            return p5ForFragmentShaders.getfuData()
        default:
            return 'ERRRROR'
    }
}

const p5ForFragmentShaders = new p5( p => {
    p.setup = () => {
        p.createCanvas(500, 750, p.WEBGL)
		p.canvas.style = "display: none;"
		p.noLoop()
    }
    p.getfuData = () => p.canvas.toDataURL("image/png")
    p.drawShader = (fragmentSource, rand) => {
        p.background(0)
        const vertSrc = `attribute vec3 aPosition;
        attribute vec2 aTexCoord;
        varying vec2 vTexCoord;

        void main() {
            vTexCoord = aTexCoord;
            vec4 positionVec4 = vec4(aPosition, 1.0);
            positionVec4.xy = positionVec4.xy * 2.0 - 1.0;
            gl_Position = positionVec4;
        }`
        const myShader = new p5.Shader(p._renderer, vertSrc, fragmentSource)
        p.shader(myShader)
        myShader.setUniform('u_rand', rand)
        p.rect(-p.width/2, -p.height/2, p.width, p.height)
    }
}, document.body)

const p5ForScripts = new p5( p => {
    p.setup = () => {
        p.createCanvas(500, 750)
		p.canvas.style = "display: none;"
		p.noLoop()
    }
    p.getfuData = () => p.canvas.toDataURL("image/png")
    p.drawScript = (scriptStr, rand) => {
        p.background(0)
        p.randomSeed(rand)
        eval(scriptStr)
    }
}, document.body)
