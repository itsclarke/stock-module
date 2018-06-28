const formatTime = d => {
    const date = new Date(d)
    var h = (date.getHours() > 12) ? date.getHours() - 12 : date.getHours()
    var m = (date.getMinutes() > 9) ? date.getMinutes() : '0' + date.getMinutes()
    var s = (date.getSeconds() > 9) ? date.getSeconds() : '0' + date.getSeconds()
    var z = (date.getHours() > 12) ? 'PM' : 'AM'

    return 'As of ' + h + ':' + m + ':' + s + ' ' + z
}

const formatNumber = num => {
    let length = num.toString().length,
        dotLocation = length%3,
        x = Math.ceil(length/3)

    if (length < 7) {
        let sub1 = num.toString().substring(0, dotLocation),
            sub2 = num.toString().substring(dotLocation, length)

        return sub1 + ',' + sub2
    } else {
        if (dotLocation !== 0) {
            let sub1 = num.toString().substring(0, dotLocation),
                sub2 = num.toString().substring(dotLocation, 3)

            return sub1 + '.' + sub2 + 'M'
        } else {
            if (x === 4) {
                return num.toString().substring(0, 3) + 'B'
            } else {
                return num.toString().substring(0, 3) + 'T'
            }
        }

    }
}

module.exports = {
    formatTime,
    formatNumber
}