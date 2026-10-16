import { useEffect } from 'react'

type SectionScrollOptions = {
  containerSelector: string
  sectionSelector: string
  offset?: number
  duration?: number
}

function useSectionScroll({
  containerSelector,
  sectionSelector,
  offset = 0,
  duration = 1000,
}: SectionScrollOptions) {
  useEffect(() => {
    const container =
      document.querySelector<HTMLElement>(containerSelector)

    if (!container) {
      return
    }

    const sections = Array.from(
      container.querySelectorAll<HTMLElement>(sectionSelector),
    )

    if (sections.length === 0) {
      return
    }

    let isAnimating = false
    let animationFrame: number | null = null
    let unlockTimer: number | null = null

    const getSectionTop = (section: HTMLElement) => {
      return Math.max(0, section.offsetTop - offset)
    }

    const getCurrentSectionIndex = () => {
      const scrollTop = container.scrollTop

      for (let index = 0; index < sections.length; index += 1) {
        const currentTop = getSectionTop(sections[index])

        const nextTop =
          index < sections.length - 1
            ? getSectionTop(sections[index + 1])
            : Number.POSITIVE_INFINITY

        if (
          scrollTop >= currentTop - 4 &&
          scrollTop < nextTop - 4
        ) {
          return index
        }
      }

      return 0
    }

    const easeInOutCubic = (progress: number) => {
      if (progress < 0.5) {
        return 4 * progress * progress * progress
      }

      return 1 - Math.pow(-2 * progress + 2, 3) / 2
    }

    const animateTo = (targetTop: number) => {
      const startTop = container.scrollTop
      const distance = targetTop - startTop
      const startTime = performance.now()

      isAnimating = true

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime

        const progress = Math.min(
          elapsed / duration,
          1,
        )

        const easedProgress =
          easeInOutCubic(progress)

        container.scrollTop =
          startTop + distance * easedProgress

        if (progress < 1) {
          animationFrame =
            requestAnimationFrame(animate)

          return
        }

        container.scrollTop = targetTop
        animationFrame = null

        unlockTimer = window.setTimeout(() => {
          isAnimating = false
        }, 150)
      }

      animationFrame =
        requestAnimationFrame(animate)
    }

    const handleWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) < 10) {
        return
      }

      if (isAnimating) {
        event.preventDefault()
        return
      }

      const currentIndex =
        getCurrentSectionIndex()

      const currentSection =
        sections[currentIndex]

      const direction =
        event.deltaY > 0 ? 1 : -1

      const currentSectionTop =
        getSectionTop(currentSection)

      const currentSectionBottom =
        currentSection.offsetTop +
        currentSection.offsetHeight

      const bottomScrollPosition =
        currentSectionBottom -
        container.clientHeight

      if (
        direction > 0 &&
        container.scrollTop <
          bottomScrollPosition - 4
      ) {
        return
      }

      if (
        direction < 0 &&
        container.scrollTop >
          currentSectionTop + 4
      ) {
        return
      }

      const nextIndex = Math.min(
        Math.max(
          currentIndex + direction,
          0,
        ),
        sections.length - 1,
      )

      if (nextIndex === currentIndex) {
        return
      }

      event.preventDefault()

      const nextSection =
        sections[nextIndex]

      let targetTop =
        getSectionTop(nextSection)

      if (
        direction < 0 &&
        nextSection.offsetHeight >
          container.clientHeight - offset
      ) {
        targetTop = Math.max(
          getSectionTop(nextSection),
          nextSection.offsetTop +
            nextSection.offsetHeight -
            container.clientHeight,
        )
      }

      animateTo(targetTop)
    }

    container.addEventListener(
      'wheel',
      handleWheel,
      {
        passive: false,
      },
    )

    return () => {
      container.removeEventListener(
        'wheel',
        handleWheel,
      )

      if (animationFrame !== null) {
        cancelAnimationFrame(animationFrame)
      }

      if (unlockTimer !== null) {
        window.clearTimeout(unlockTimer)
      }
    }
  }, [
    containerSelector,
    sectionSelector,
    offset,
    duration,
  ])
}

export default useSectionScroll