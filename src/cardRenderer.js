export default ({location, generationMethod}) => {
    switch (generationMethod) {
        case 0: // static image file (jpeg/png/...)
            return location
        case 1: // p5 script
            return 'p5'
        case 2: // fragment shader
            return 'frag'
        default:
            return 'ERRRROR'
    }
}