import { defineStore } from 'pinia'
import { ref } from 'vue'

const HIGH_VOLUM_ICON = 'volume-high'
const LOW_VOLUM_ICON = 'volume-low'
const MUTE_VOLUM_ICON = 'volume-mute'

const PREVIEW_WIDTH = '176' // px

export const useVlogControlsStore = defineStore('vlog-controls', () => {

    const isVlogPlaying = ref(false)
    const isFullscreen = ref(false)
    const duration = ref(0)
    const volumeIcon = ref(HIGH_VOLUM_ICON)
    const currentTime = ref(0)
    const process = ref(0)
    const previewTime = ref(0)
    const previewPosition = ref(0)
    const isDragging = ref(false)

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
      duration.value = videoDuration
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

    const updateTime = (time) => {
      setCurrentTime(time)
      setProcess(time)
    }

    const setCurrentTime = (time) => {
      currentTime.value = time
    }

    const setProcess = (time) => {
      process.value = (time * 100 / duration.value) + '%'
    }

    const seek = (video, event) => {
      video.currentTime = getNewTime(event)
    }

    const preview = (event) => {
      // mouse down on timeline triggers dragging
      // if dragging, the process bar will be changed by the dragging value
      if(isDragging.value) {
        setProcess(getNewTime(event))
      }
      previewTime.value = getNewTime(event)
    }

    const getNewTime = (event) => {
      const timeline = event.currentTarget
      const rect = timeline.getBoundingClientRect()
      const offsetX = event.clientX - rect.left
      const totalWidth = rect.width
      const percentage = offsetX / totalWidth
      setPreviewPostion(offsetX, totalWidth)

      return percentage * duration.value
    }

    const setPreviewPostion = (xCoordinate, totalWidth) => {
      let left = xCoordinate - PREVIEW_WIDTH/2
      const maxLeft = totalWidth - PREVIEW_WIDTH

      if (left < 0) left = 0
      if (left > maxLeft) left = maxLeft
    
      previewPosition.value = left + 'px'
    }

    const startDragging = (video) => {
      video.pause()
      isDragging.value = true
    }

    const stopDragging = (video) => {
      video.play()
      isDragging.value = false
    }

    const replay = (video) => {
      video.play()
    }

    return { 
        isVlogPlaying,
        duration,
        volumeIcon,
        currentTime,
        process,
        previewTime,
        previewPosition,
        togglePlay,
        toggleFullscreen,
        watchExitFullScreenWithESC,
        setDuration,
        toggleMute,
        setVolume,
        updateTime,
        seek,
        preview,
        formattedTime,
        startDragging,
        stopDragging,
        replay
    }

})
