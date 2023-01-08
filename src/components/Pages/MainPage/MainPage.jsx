import { useState } from "react"
import { StatusRequestForm, MainStatus, ErrorLoading } from "../../index";

export default function MainPage(props) {
  const [form, setForm] = useState({ uid: '', popover: false });
  const [pasportData, setPasportData] = useState({
    isLoading: false,
    data: null,
    failLoad: false
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setForm(prevForm => {
      if (/^\d+$/.test(value) || value === '') {
        return { ...prevForm, [name]: value, popover: false };
      }
      return { ...prevForm, popover: false };
    });
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (evt.target['uid'].value.length !== 25) {
      setForm(prevForm => {
        return { ...prevForm, popover: true };
      })
      return
    }
    setPasportData(preventData => ({ ...preventData, isLoading: true, failLoad: false }))

    fetch(`${process.env.REACT_APP_SERVER_URL}${evt.target['uid'].value}`)
      .then(response => {
        if (response.status === 200) return response.json()
        throw new Error('Network response was not ok.')
      })
      .then(data => {
        setPasportData(preventData => ({ ...preventData, isLoading: false, data: data }))
      })
      .catch(error => {
        setPasportData(preventData => ({ ...preventData, isLoading: false, data: null, failLoad: true }))
      });
  }
  return (
    <>
      <div className="status-checker">
        <h1 className="status-checker__header">Проверка статуса изготовления заграничного паспорта на 10 лет</h1>
        <StatusRequestForm handleChange={handleChange} handleSubmit={handleSubmit} form={form} popover={form.popover} />
        <div className="status-checker__info">
          {pasportData.isLoading && <div className="status-checker__loader">Загрузка... (может длиться до 1 минуты)</div>}
          {pasportData.data && <MainStatus pasportData={pasportData.data} />}
          {pasportData.failLoad ? <ErrorLoading uid={form.uid} /> : null}
        </div>
      </div>
      <div className="status-checker__footer"><div><a className="status-checker__footer-link" href="mailto:issue.checkmypassport@gmail.com">issue.checkmypassport@gmail.com</a></div></div>
    </>
  )
}