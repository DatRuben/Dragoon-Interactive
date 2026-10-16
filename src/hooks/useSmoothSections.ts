import { useEffect, useState } from 'react'
import Lenis from 'lenis'
import Snap from 'lenis/snap'
import 'lenis/dist/lenis.css'

type SmoothSectionsOptions = {
    wrapperSelector: string
    contentSelector: string
    sectionSelector: string
}

export type ScrollScreenInfo = {
    id: string
    label: string
    navSection: string
    experienceType: string
}

type ActiveScrollScreen = {
    id: string
    navSection: string
    experienceType: string
}

function useSmoothSections({
    wrapperSelector,
    contentSelector,
    sectionSelector,
}: SmoothSectionsOptions) {
    const [activeScreen, setActiveScreen] =
        useState<ActiveScrollScreen>({
            id: '',
            navSection: '',
            experienceType: '',
        })

    const [screens, setScreens] =
        useState<ScrollScreenInfo[]>([])

    useEffect(() => {
        const wrapper =
            document.querySelector<HTMLElement>(
                wrapperSelector,
            )

        const content =
            document.querySelector<HTMLElement>(
                contentSelector,
            )

        if (!wrapper || !content) {
            return
        }

        const sections = Array.from(
            content.querySelectorAll<HTMLElement>(
                sectionSelector,
            ),
        )

        if (sections.length === 0) {
            return
        }

        setScreens(
            sections.map((section) => ({
                id: section.id,
                label:
                    section.dataset.scrollLabel ??
                    section.id,
                navSection:
                    section.dataset.navSection ??
                    section.id,
                experienceType:
                    section.dataset.experienceType ??
                    '',
            })),
        )

        const updateActiveScreen = () => {
            const wrapperRect =
                wrapper.getBoundingClientRect()

            const markerPosition =
                wrapperRect.top +
                wrapper.clientHeight * 0.35

            const currentSection =
                sections.find((section) => {
                    const sectionRect =
                        section.getBoundingClientRect()

                    return (
                        sectionRect.top <= markerPosition &&
                        sectionRect.bottom > markerPosition
                    )
                })

            if (!currentSection) {
                return
            }

            const nextScreen = {
                id: currentSection.id,
                navSection:
                    currentSection.dataset.navSection ??
                    currentSection.id,
                experienceType:
                    currentSection.dataset.experienceType ??
                    '',
            }

            setActiveScreen((currentScreen) => {
                if (
                    currentScreen.id === nextScreen.id &&
                    currentScreen.navSection ===
                    nextScreen.navSection &&
                    currentScreen.experienceType ===
                    nextScreen.experienceType
                ) {
                    return currentScreen
                }

                return nextScreen
            })
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

            removeSnapPoints = sections.map(
                (section) => {
                    return snap.add(
                        getLocalSectionTop(section),
                    )
                },
            )
        }

        rebuildSnapPoints()
        updateActiveScreen()

        wrapper.addEventListener(
            'scroll',
            updateActiveScreen,
            {
                passive: true,
            },
        )

        const resizeObserver =
            new ResizeObserver(() => {
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

            wrapper.removeEventListener(
                'scroll',
                updateActiveScreen,
            )

            snap.destroy()
            lenis.destroy()
        }
    }, [
        wrapperSelector,
        contentSelector,
        sectionSelector,
    ])

    return {
        activeScreen,
        screens,
    }
}

export default useSmoothSections