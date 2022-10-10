(function() {
    let constructTime = () => {
        var date = new Date()
        var hour = date.getHours()
        var minute = date.getMinutes()
        var second = date.getSeconds()
        var meridian = 'AM'

        if(hour == 0) {
            hour = 12
        }
        if(hour > 12) {
            hour = hour - 12
            meridian = 'PM'
        }

        hour = (hour < 10) ? '0' + hour : hour
        minute = (minute < 10) ? '0' + minute : minute
        second = (second < 10) ? '0' + second : second

        var currentTime = hour + ':' + minute + ':' + second + ' ' + meridian
        document.querySelector('.time').innerText = currentTime

        setTimeout(constructTime, 1000)
    }
    constructTime()
})()