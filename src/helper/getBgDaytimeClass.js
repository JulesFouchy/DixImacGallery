export default () => {
    const hour = new Date().getHours()
    if (hour >= 22 || hour <= 4)
        return "bg-night"
    else if (hour <= 8)
        return "bg-dawn"
    else if (hour <= 18)
        return "bg-day"
    else
        return "bg-dusk"
}