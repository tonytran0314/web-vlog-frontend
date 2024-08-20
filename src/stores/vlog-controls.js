import { defineStore } from 'pinia'
import { ref } from 'vue'

const HIGH_VOLUM_ICON = 'volume-high'
const LOW_VOLUM_ICON = 'volume-low'
const MUTE_VOLUM_ICON = 'volume-mute'

const PREVIEW_WIDTH = '176' // px

export const useVlogControlsStore = defineStore('vlog-controls', () => {

    const isVlogPlaying = ref(true)
    const isFullscreen = ref(false)
    const duration = ref(0)
    const volumeIcon = ref(HIGH_VOLUM_ICON)
    const currentTime = ref(0)
    const process = ref(0)
    const previewTime = ref(0)
    const previewPosition = ref(0)
    const isDragging = ref(false)
    const videoElement = ref(null)
    const videoWrapper = ref(null)
    const volumeBar = ref(null)

    /* -------------------------------------------------------------------------- */
    /*                               PRIVATE METHODS                              */
    /* -------------------------------------------------------------------------- */

    const setCurrentTime = () => currentTime.value = videoElement.value.currentTime

    const setProcess = (time) => process.value = (time * 100 / duration.value) + '%'

    const play = () => {
      videoElement.value.play()
      isVlogPlaying.value = true
    }

    const pause = () => {
      videoElement.value.pause()
      isVlogPlaying.value = false
    }

    const mute = () => {
      videoElement.value.volume = 0
      volumeBar.value.value = 0
      volumeIcon.value = MUTE_VOLUM_ICON
    }

    const unmute = () => {
      // set them to currentVolume instead
      videoElement.value.volume = 1
      volumeBar.value.value = 1
      volumeIcon.value = HIGH_VOLUM_ICON
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

    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) { isFullscreen.value = false }
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


    /* -------------------------------------------------------------------------- */
    /*                               PUBLIC METHODS                               */
    /* -------------------------------------------------------------------------- */
    
    const setVideoElement = (video) => videoElement.value = video
    const setVideoWrapper = (wrapper) => videoWrapper.value = wrapper
    const setVolumeBar = (volume) => volumeBar.value = volume

    const setDuration = () => duration.value = videoElement.value.duration

    const replay = () => play()

    const togglePlay = () => videoElement.value.paused ? play() : pause()

    const toggleMute = () => (videoElement.value.volume === 0) ? unmute() : mute()

    const toggleFullscreen = () => isFullscreen.value ? exitFullscreen() : enterFullscreen(videoWrapper.value)

    const setVolume = (event) => {
      videoElement.value.volume = event.target.value
      
      if (videoElement.value.volume === 0) 
        volumeIcon.value = MUTE_VOLUM_ICON
      else if (videoElement.value.volume > 0.5)
        volumeIcon.value = HIGH_VOLUM_ICON
      else
        volumeIcon.value = LOW_VOLUM_ICON 
    }

    const watchExitFullScreenWithESC = () => {
      document.addEventListener('fullscreenchange', handleFullscreenChange)
      document.addEventListener('webkitfullscreenchange', handleFullscreenChange)
      document.addEventListener('mozfullscreenchange', handleFullscreenChange)
      document.addEventListener('MSFullscreenChange', handleFullscreenChange)
    }

    const startDragging = () => {
      pause()
      isDragging.value = true
    }

    const stopDragging = () => {
      play()
      isDragging.value = false
    }

    const updateTime = () => {
      setCurrentTime()
      setProcess(videoElement.value.currentTime)
    }

    const seek = (event) => {
      videoElement.value.currentTime = getNewTime(event)
      play()
    }

    const preview = (event) => {
      // mousedown on timeline to drag, the process bar will be changed by the dragging value
      if(isDragging.value) setProcess(getNewTime(event))

      previewTime.value = getNewTime(event)
    }


    /* -------------------------------------------------------------------------- */
    /*                                  COMPUTED                                  */
    /* -------------------------------------------------------------------------- */
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


    return { 
        isVlogPlaying,
        duration,
        volumeIcon,
        currentTime,
        process,
        previewTime,
        previewPosition,
        videoElement,
        videoWrapper,
        volumeBar,
        setVideoElement,
        setVideoWrapper,
        setVolumeBar,
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
