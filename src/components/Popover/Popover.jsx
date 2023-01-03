import { useState, useRef, useEffect } from "react"

export default function Popover({ children, formCoords }) {
  const popover = useRef(null)
  const [popoverCoords, setPopoverCoords] = useState({
    top: 65,
    left: 0,
    opacity: 0
  })
  useEffect(() => {
    let left = formCoords.width / 2 - popover.current.offsetWidth / 2;
    setPopoverCoords(prevCoords => ({ ...prevCoords, left: left, opacity: 1 }))
  }, [formCoords.width])

  return (
    <div ref={popover} className="status-checker__form-popover"
      style={{ 
        left: `${popoverCoords.left}px`, 
        top: `${popoverCoords.top}px`,
        opacity: popoverCoords.opacity
        }}>
      {children}
    </div>
  )
}

// popower.style.top = `${button.offsetTop - popower.offsetHeight}px`;
// popower.style.left = `${button.offsetLeft + button.offsetWidth / 2 - popower.offsetWidth / 2}px`;