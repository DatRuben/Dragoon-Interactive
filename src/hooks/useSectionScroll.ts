import { useEffect } from 'react'

function useSectionScroll(
  sectionSelector: string,
  offset = 0,
) {
  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>(sectionSelector),
    )

    if (sections.length === 0) {
      return
    }

    let isTransitioning = false

    const findCurrentSection = () => {
      let closestIndex = 0
      let closestDistance = Number.POSITIVE_INFINITY

      sections.forEach((section, index) => {
        const distance = Math.abs(
          section.getBoundingClientRect().top - offset,
        )

        if (distance < closestDistance) {
          closestDistance = distance
          closestIndex = index
        }
      })

      return closestIndex
    }

    const handleWheel = (event: WheelEvent) => {
      if (isTransitioning || Math.abs(event.deltaY) < 10) {
        return
      }

      const currentIndex = findCurrentSection()

      const direction = event.deltaY > 0 ? 1 : -1

      const nextIndex = Math.min(
        Math.max(currentIndex + direction, 0),
        sections.length - 1,
      )

      if (nextIndex === currentIndex) {
        return
      }

      event.preventDefault()

      isTransitioning = true

      sections[nextIndex].scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })

      window.setTimeout(() => {
        isTransitioning = false
      }, 700)
    }

    window.addEventListener('wheel', handleWheel, {
      passive: false,
    })

    return () => {
      window.removeEventListener('wheel', handleWheel)
    }
  }, [sectionSelector, offset])
}

export default useSectionScroll