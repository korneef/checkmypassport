import { StatusExplanation } from "../index"


export default function MainStatus({ pasportData }) {
  const headerClass = 'status-cheker__status-header';
  const descriptionClass = 'status-cheker__status-description';

  return (
    <div className="status-cheker__wrapper">
      <h2 className={headerClass}>Статус с сайта info.midpass.ru</h2>
      <div className={descriptionClass}>{pasportData.passportStatus.name}</div>
      <h2 className={headerClass}>Прогресс в процентах с сайта info.midpass.ru</h2>
      <div className={descriptionClass}>{pasportData.internalStatus.percent}%</div>
      <h2 className={headerClass}>Расширенный статус с сайта info.midpass.ru</h2>
      <div className={descriptionClass}>{pasportData.internalStatus.name}</div>
      <h2 className={headerClass}>Расшифровка статуса (по открытой информации в интернете)</h2>
      <StatusExplanation className={descriptionClass} pasportData={pasportData} />
    </div>
  )
}