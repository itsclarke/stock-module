const formatTime = (date) => {
    console.log('date => ', date)
    var h = (date.getHours() > 12) ? date.getHours() - 12 : date.getHours()
    var m = (date.getMinutes() > 9) ? date.getMinutes() : '0' + date.getMinutes()
    var s = (date.getSeconds() > 9) ? date.getSeconds() : '0' + date.getSeconds()
    var z = (date.getHours() > 12) ? 'PM' : 'AM'

    return 'As of ' + h + ':' + m + ':' + s + ' ' + z
}

module.exports = {
    formatTime
}