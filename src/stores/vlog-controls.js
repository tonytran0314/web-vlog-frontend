import { defineStore } from 'pinia'
import { ref } from 'vue'

const HIGH_VOLUM_ICON = 'volume-high'
const LOW_VOLUM_ICON = 'volume-low'
const MUTE_VOLUM_ICON = 'volume-mute'

const ONE_HOUR = '3600' // seconds
const HOUR_INITIAL = '00:00:00'
const MINUTE_INITIAL = '00:00'

export const useVlogControlsStore = defineStore('vlog-controls', () => {

    const isVlogPlaying = ref(false)
    const isFullscreen = ref(false)
    const duration = ref(0)
    const volumeIcon = ref(HIGH_VOLUM_ICON)
    const currentTime = ref(null)

    const togglePlay = (video) => {
        video.paused ? video.play() : video.pause()
        isVlogPlaying.value = !isVlogPlaying.value
    }

    const toggleFullscreen = (videoContainer = null) => {
      isFullscreen.value ? exitFullscreen() : enterFullscreen(videoContainer)
    }

    const enterFullscreen = (videoWrapper) => {
      if (videoWrapper.requestFullscreen) { videoWrapper.requestFullscreen() }
      else if (videoWrapper.mozRequestFullScreen) { videoWrapper.mozRequestFullScreen() } /* Firefox */
      else if (videoWrapper.webkitRequestFullscreen) { videoWrapper.webkitRequestFullscreen() } /* Chrome, Safari and Opera */
      else if (videoWrapper.msRequestFullscreen) { videoWrapper.msRequestFullscreen() } /* IE/Edge */

      isFullscreen.value = true
    }
    
    const exitFullscreen = () => {
      if (document.exitFullscreen) { document.exitFullscreen() } 
      if (document.mozCancelFullScreen) { document.mozCancelFullScreen() } /* Firefox */
      if (document.webkitExitFullscreen) { document.webkitExitFullscreen() } /* Chrome, Safari and Opera */
      if (document.msExitFullscreen) { document.msExitFullscreen() } /* IE/Edge */
      
      isFullscreen.value = false
    }

    const watchExitFullScreenWithESC = () => {
      document.addEventListener('fullscreenchange', handleFullscreenChange)
      document.addEventListener('webkitfullscreenchange', handleFullscreenChange)
      document.addEventListener('mozfullscreenchange', handleFullscreenChange)
      document.addEventListener('MSFullscreenChange', handleFullscreenChange)
    }

    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) { isFullscreen.value = false }
    }

    const setDuration = (videoDuration) => {
      duration.value = formattedTime(videoDuration)

      // set initial current time 
      currentTime.value = (videoDuration > ONE_HOUR) ? HOUR_INITIAL : MINUTE_INITIAL
    }
    
    const formattedTime = (time) => {
      let hours = Math.floor(time / 3600)
      let minutes = Math.floor((time - 3600*hours) / 60)
      let seconds = Math.floor(time % 60)

      if (hours === 0)                hours = '' 
      if (hours > 0 && hours < 10)    hours = `0${hours}:`
      if (hours > 10)                 hours = `${hours}:`

      if (minutes < 10) minutes = `0${minutes}`
      if (seconds < 10) seconds = `0${seconds}`

      return `${hours}${minutes}:${seconds}`
    }

    const toggleMute = (video, volumeBar) => {
      if(video.volume !== 0) {
        video.volume = 0
        volumeBar.value = 0
        volumeIcon.value = MUTE_VOLUM_ICON
      } else {
        // set them to currentVolume instead
        video.volume = 1
        volumeBar.value = 1
        volumeIcon.value = HIGH_VOLUM_ICON
      }
    }

    const setVolume = (video, volume) => {
      video.volume = volume
      
      if (video.volume === 0) 
        volumeIcon.value = MUTE_VOLUM_ICON
      else if (video.volume > 0.5)
        volumeIcon.value = HIGH_VOLUM_ICON
      else
        volumeIcon.value = LOW_VOLUM_ICON 
    }

    const setCurrentTime = (time) => {
      currentTime.value = formattedTime(time)
    }

    return { 
        isVlogPlaying,
        duration,
        volumeIcon,
        currentTime,
        togglePlay,
        toggleFullscreen,
        watchExitFullScreenWithESC,
        setDuration,
        toggleMute,
        setVolume,
        setCurrentTime
    }

})
