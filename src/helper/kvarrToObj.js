export default arr => {
    const o = {}
    arr.forEach(kv => o[kv[0]] = kv[1])
    return o
}