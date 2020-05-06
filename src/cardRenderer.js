export default ({url, generationMethod}) => {
    switch (generationMethod) {
        case 0: // static image file (jpeg/png/...)
            return url
        case 1: // p5 script
            return 'p5'
        case 2: // fragment shader
            return 'frag'
        default:
            return 'ERRRROR'
    }
}