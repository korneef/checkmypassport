import { useRef, useEffect, useState } from "react";
import { Popover } from "../index";

export default function StatusRequestForm({ handleChange, handleSubmit, form, popover }) {
  const formInput = useRef(null)
  const [formCoords, setFormCoords] = useState({})
  useEffect(() => {
    setFormCoords({
      top: formInput.current.offsetTop,
      height: formInput.current.offsetHeight,
      left: formInput.current.offsetLeft,
      width: formInput.current.offsetWidth
    })

  }, [])

  const placeholder = 'Введите номер заявления'

  return (
    <form ref={formInput} className='status-checker__form' onSubmit={handleSubmit}>
      <input className='status-checker__form-input' onChange={handleChange} name='uid' type="text" value={form.uid} placeholder={placeholder} />
      <button className='status-checker__form-button'>Проверить!</button>
      {popover ? <Popover input={formInput} formCoords={formCoords}>Номер заявления должен составлять 25 символов</Popover> : null}
    </form>
  )
}