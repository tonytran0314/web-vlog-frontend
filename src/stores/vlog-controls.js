import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useVlogControlsStore = defineStore('vlog-controls', () => {

    const isVlogPlaying = ref(false)
    const isFullscreen = ref(false)

    const togglePlayPauseVlog = (videoRef) => {
        videoRef.paused ? videoRef.play() : videoRef.pause()
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

    return { 
        isVlogPlaying,
        isFullscreen,
        togglePlayPauseVlog,
        toggleFullscreen,
        enterFullscreen,
        exitFullscreen,
        watchExitFullScreenWithESC
    }

})
