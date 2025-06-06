'use client'

import logo from '@/public/assets/images/logo.svg'
import { MotionButton } from '@/shared/custom/MotionButton'
import { XIcon } from '@phosphor-icons/react'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'

import { cn } from '@/lib/utils'

import { NAV_MENU_LINKS } from './Header.constant'

export const Header = () => {
    const [isOnDark, setIsOnDark] = useState(false)
    const [menuClick, setMenuClick] = useState(false)
    const [showMenuContent, setShowMenuContent] = useState(false)
    const [isHover, setIsHover] = useState(false)
    const pathname = usePathname()
    const triggerRef = useRef<HTMLDivElement | null>(null)

    const handleMenuClick = () => {
        if (menuClick) {
            setMenuClick(false)
        } else {
            setMenuClick(true)
            setTimeout(() => setShowMenuContent(true), 300)
        }
    }

    useEffect(() => {
        const sensitivity = 0.1

        const handleScroll = () => {
            const sections = document.querySelectorAll('section[data-dark]')
            const triggerPoint = window.innerHeight * sensitivity

            for (const section of sections) {
                const rect = section.getBoundingClientRect()
                if (rect.top <= triggerPoint && rect.bottom >= triggerPoint) {
                    const isDark = section.getAttribute('data-dark') === 'true'
                    setIsOnDark(isDark)
                    break
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll()

        return () => window.removeEventListener('scroll', handleScroll)
    }, [pathname])

    useEffect(() => {
        setIsOnDark(false)
    }, [pathname])

    return (
        <>
            <div ref={triggerRef} className="h-8 w-full absolute top-0" />

            <div className="w-full sticky top-0 z-20 flex justify-center items-center py-5">
                <motion.div
                    className={cn(
                        'min-w-96 rounded-full backdrop-blur-lg p-3.5',
                        isOnDark ? 'bg-white/10' : 'bg-[#0B0B0B0D]',
                    )}
                    animate={{
                        width: menuClick ? '90%' : '24rem',
                    }}
                    initial={{
                        width: '24rem',
                    }}
                    transition={{
                        duration: 0.5,
                        ease: 'easeInOut',
                    }}
                >
                    <div className="flex items-center justify-between">
                        <Link href="/">
                            <Image
                                src={logo}
                                alt="logo"
                                className={cn(
                                    'transition-all duration-500 w-32 h-auto',
                                    isOnDark ? 'brightness-200' : 'brightness-0',
                                )}
                            />
                        </Link>

                        <AnimatePresence>
                            {menuClick && showMenuContent && (
                                <motion.nav
                                    key="menu-content"
                                    className="max-w-3xl overflow-hidden"
                                    initial={{ opacity: 0, scale: 0.95, width: 0 }}
                                    animate={{ opacity: 1, scale: 1, width: '100%' }}
                                    exit={{ opacity: 0, scale: 0.9, width: 0 }}
                                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                                    onAnimationComplete={(definition) => {
                                        if (definition === 'exit') {
                                            setShowMenuContent(false)
                                        }
                                    }}
                                >
                                    <ul className="relative flex justify-between px-4">
                                        <AnimatePresence>
                                            {NAV_MENU_LINKS.map((link, idx) => {
                                                const activeLink = link.href === pathname

                                                return (
                                                    <li
                                                        key={`${idx}-${link.id}`}
                                                        className="relative px-4 py-2"
                                                    >
                                                        {activeLink && (
                                                            <motion.div
                                                                layoutId="nav-active"
                                                                className={cn(
                                                                    'absolute inset-0 rounded-full z-0',
                                                                    isOnDark
                                                                        ? 'bg-white'
                                                                        : 'bg-black',
                                                                )}
                                                                transition={{
                                                                    type: 'spring',
                                                                    stiffness: 450,
                                                                    damping: 30,
                                                                }}
                                                            />
                                                        )}
                                                        <Link
                                                            href={link.href}
                                                            className={cn(
                                                                'relative z-10 font-bold px-4 py-2 rounded-full transition-colors duration-300',
                                                                {
                                                                    'text-white':
                                                                        (activeLink && !isOnDark) ||
                                                                        (!activeLink && isOnDark),
                                                                    'text-black':
                                                                        (activeLink && isOnDark) ||
                                                                        (!activeLink && !isOnDark),
                                                                },
                                                            )}
                                                        >
                                                            {link.title}
                                                        </Link>
                                                    </li>
                                                )
                                            })}
                                        </AnimatePresence>
                                    </ul>
                                </motion.nav>
                            )}
                        </AnimatePresence>

                        <MotionButton
                            className="rounded-full relative cursor-pointer flex items-center justify-center overflow-hidden bg-black"
                            animate={{
                                width: menuClick ? '3.5rem' : 'auto',
                            }}
                            style={{
                                height: !menuClick ? '2.5rem' : '',
                                padding: menuClick ? '1.75rem 0' : '',
                            }}
                            transition={{
                                width: { duration: 0.15, ease: 'easeInOut' },
                                padding: { duration: 0.2, ease: 'easeInOut' },
                            }}
                            onMouseEnter={() => setIsHover(true)}
                            onMouseLeave={() => setIsHover(false)}
                            onClick={handleMenuClick}
                            initial="initial"
                        >
                            {/* Градиент */}
                            <motion.div
                                animate={{
                                    scaleY: isHover ? 1 : 0,
                                    opacity: isHover ? 1 : 0,
                                    filter: isHover ? 'brightness(2)' : 'brightness(1)',
                                }}
                                transition={{ duration: 0.25, easing: 'ease-in-out' }}
                                className="absolute inset-0 origin-bottom z-10 bg-gradient-to-t from-[#00636F] to-[#000809] pointer-events-none"
                                style={{ transformOrigin: 'bottom' }}
                            />

                            {/* Контент */}
                            {menuClick ? (
                                <motion.div
                                    key="close"
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.5 }}
                                    transition={{ duration: 0.2 }}
                                    className="z-20"
                                >
                                    <XIcon size={24} color="#C4C4C4" weight="bold" />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="menu"
                                    className="flex items-center gap-3 z-20 text-white"
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -10 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <span className="font-bold text-base">Меню</span>
                                    <div className="flex flex-col gap-1 justify-center h-full">
                                        <div className="w-7 h-0.5 bg-white/50" />
                                        <div className="w-7 h-0.5 bg-white/50" />
                                    </div>
                                </motion.div>
                            )}
                        </MotionButton>
                    </div>
                </motion.div>
            </div>
        </>
    )
}
