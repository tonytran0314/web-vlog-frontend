import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useVlogControlsStore = defineStore('vlog-controls', () => {

    const isVlogPlaying = ref(false)
    const isFullscreen = ref(false)
    const duration = ref(0)

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
    }
    
    const formattedTime = (time) => {
      let hours = Math.floor(time / 3600)
      let minutes = Math.floor((time - 3600*hours) / 60)
      let seconds = Math.floor(time % 60)

      if (hours === 0)  hours = '' 
      if (hours > 0 && hours < 10)   hours = `0${hours}:`
      if (hours > 10)   hours = `${hours}:`

      if (minutes < 10) minutes = `0${minutes}`
      if (seconds < 10) seconds = `0${seconds}`

      return `${hours}${minutes}:${seconds}`
    }

    return { 
        isVlogPlaying,
        isFullscreen,
        duration,
        togglePlay,
        toggleFullscreen,
        enterFullscreen,
        exitFullscreen,
        watchExitFullScreenWithESC,
        setDuration
    }

})
