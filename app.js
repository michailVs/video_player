document.querySelector('.btn-play').addEventListener('click', play)
document.querySelector('.btn-next').addEventListener('click', next)
document.querySelector('.btn-back').addEventListener('click', back)
document.querySelector('.onScren').addEventListener('click', scren)
document.querySelector('.volume').addEventListener('input', volume)
document.querySelector('.speed').addEventListener('click', speed)

let video = document.querySelector('.video-player')
let progress = document.querySelector('.progress')

video.ontimeupdate = progressUpdate
let progressValue = document.querySelector('.progress-value')
progress.addEventListener('click', videoRewind)
let display

let count = 0

function play() {
    if (count === 0) {
        video.play()
        count = 1
        document.querySelector('.btn-play').innerHTML = `Pause`
    } else {
        video.pause()
        count = 0
        document.querySelector('.btn-play').innerHTML = `Play`
    }
}
function next() {
    video.pause()
    video.currentTime += 5
    video.play()
}
function back() {
    video.pause()
    video.currentTime -= 5
    video.play()
}
function volume() {
    let v = this.value
    video.volume = v / 100
}
function speed(e) {
    e.preventDefault()
    video.playbackRate = e.target.value
}

function progressUpdate() {
    let d = video.duration
    let c = video.currentTime
    progress.value = 100 * c / d
    progressValue.innerText = `${parseInt(c)} / ${parseInt(d)}`
}

function videoRewind() {
    let w = this.offsetWidth
    let o = event.offsetX
    this.value = 100 * o / w
    video.pause()
    video.currentTime = video.duration * (o / w)
    video.play()
}
function scren() {
    if (this.classList.contains("open")) {
        this.classList.remove('open')
        this.classList.add('close')
        this.innerHTML = "&raquo; &laquo;"
        video.style.width = '1550px'
        video.style.height = '660px'
        video.style.marginTop = '6px'
    } else {
        this.classList.remove('close')
        this.classList.add('open')
        this.innerHTML = "&laquo; &raquo;"
        video.style.width = '500px'
        video.style.height = '280px'
        video.style.marginTop = '100px'
    }
}