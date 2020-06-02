export default o => {
    const arr = Object.entries(o)
    return arr.map( kv => ({
        id: kv[0],
        ...kv[1],
    }))
}