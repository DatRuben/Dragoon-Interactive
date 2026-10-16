import { useEffect } from 'react'
import Lenis from 'lenis'
import Snap from 'lenis/snap'
import 'lenis/dist/lenis.css'

type SmoothSectionsOptions = {
  wrapperSelector: string
  contentSelector: string
  sectionSelector: string
}

function useSmoothSections({
  wrapperSelector,
  contentSelector,
  sectionSelector,
}: SmoothSectionsOptions) {
  useEffect(() => {
    const wrapper =
      document.querySelector<HTMLElement>(wrapperSelector)

    const content =
      document.querySelector<HTMLElement>(contentSelector)

    if (!wrapper || !content) {
      return
    }

    const sections = Array.from(
      content.querySelectorAll<HTMLElement>(sectionSelector),
    )

    if (sections.length === 0) {
      return
    }

    const lenis = new Lenis({
      wrapper,
      content,
      autoRaf: true,
      smoothWheel: true,
      wheelMultiplier: 0.85,
      anchors: true,
    })

    const snap = new Snap(lenis, {
      type: 'lock',
      distanceThreshold: '100%',
      debounce: 0,
      duration: 1.05,
      easing: (t) =>
        1 - Math.pow(1 - t, 4),
    })

    let removeSnapPoints: Array<() => void> = []

    const getLocalSectionTop = (
      section: HTMLElement,
    ) => {
      const wrapperRect =
        wrapper.getBoundingClientRect()

      const sectionRect =
        section.getBoundingClientRect()

      return (
        sectionRect.top -
        wrapperRect.top +
        wrapper.scrollTop
      )
    }

    const rebuildSnapPoints = () => {
      removeSnapPoints.forEach((remove) => {
        remove()
      })

      removeSnapPoints = sections.map((section) => {
        return snap.add(
          getLocalSectionTop(section),
        )
      })
    }

    rebuildSnapPoints()

    const resizeObserver = new ResizeObserver(() => {
      rebuildSnapPoints()
    })

    resizeObserver.observe(wrapper)
    resizeObserver.observe(content)

    sections.forEach((section) => {
      resizeObserver.observe(section)
    })

    return () => {
      resizeObserver.disconnect()

      removeSnapPoints.forEach((remove) => {
        remove()
      })

      snap.destroy()
      lenis.destroy()
    }
  }, [
    wrapperSelector,
    contentSelector,
    sectionSelector,
  ])
}

export default useSmoothSections