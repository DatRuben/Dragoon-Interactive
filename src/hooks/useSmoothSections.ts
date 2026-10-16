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
    })

    const snap = new Snap(lenis, {
      type: 'lock',
      distanceThreshold: '100%',
      debounce: 0,
      duration: 1.05,
      easing: (t) =>
        1 - Math.pow(1 - t, 4),
    })

    snap.addElements(sections, {
      align: 'start',
    })

    return () => {
      snap.stop()
      lenis.destroy()
    }
  }, [
    wrapperSelector,
    contentSelector,
    sectionSelector,
  ])
}

export default useSmoothSections