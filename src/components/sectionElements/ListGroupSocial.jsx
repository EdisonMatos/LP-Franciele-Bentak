import { Link } from 'react-scroll'
import content from '../../content/content'
import { useState, useEffect } from 'react'
import IconButton from '../interactives/IconButton'
import Button from '../interactives/Button'
import { useNavigate } from 'react-router-dom'
import { FaWhatsapp } from 'react-icons/fa'

export default function ListGroupSocial({ colorMode = 'default' }) {
  const navigate = useNavigate()
  const [scrolling, setScrolling] = useState(false)

  const handleScroll = () => {
    setScrolling(window.scrollY > 0)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Define cores baseadas no modo atual
  const getTextColor = () => {
    if (colorMode === 'light') return 'text-black'
    if (colorMode === 'dark') return 'text-white'
    return 'text-white' // default
  }

  const getHoverTextColor = () => {
    if (colorMode === 'light') return 'hover:text-black'
    if (colorMode === 'dark') return 'hover:text-white'
    return 'hover:text-white'
  }

  const getBorderColor = () => {
    if (colorMode === 'light') return 'bg-black'
    if (colorMode === 'dark') return 'bg-white'
    return 'bg-white'
  }

  const textShadow =
    colorMode === 'dark' || colorMode === 'default'
      ? '[text-shadow:_2px_2px_3px_rgb(0_0_0_/_0%)]'
      : ''

  return (
    <ul
      className={`h-14 hidden desktop1:flex my-auto items-center justify-end tablet1:items-center desktop1:gap-8 desktop2:gap-8 w-auto font-normal text-paragraph3 font-secondFont ${getTextColor()}`}
    >
      {['home', 'service', 'about', 'faq'].map((section, index) => (
        <li key={section} className="transition group h-[24px]">
          <Link
            to={section}
            className="relative font-semibold cursor-pointer"
            spy={true}
            smooth={true}
            duration={500}
            offset={-50}
          >
            <span
              className={`h-[24px] inline-block ${getHoverTextColor()} ${textShadow}`}
            >
              {content.texts.navbar.menuItems[index]}
            </span>
            <div
              className={`absolute -bottom-2 left-0 w-full h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${getBorderColor()}`}
            />
          </Link>
        </li>
      ))}

      <li>
        <div className="flex gap-[10px] items-center">
          <Button
            id="conversion"
            aria-label={content.texts.hero.ctaButtonAriaLabel}
            label="Contato"
            className=""
            textclassName="text-paragraph3 text-labelWpp"
            size="small"
            color={`bg-wpp`}
            icon={<FaWhatsapp className="text-labelWpp" />}
          />
        </div>
      </li>
    </ul>
  )
}
