import { StatusExplanation, HeaderElement, TextBlock } from "../../index"


export default function MainStatus({ pasportData }) {
  const headerClass = 'status-cheker__status-header';
  const descriptionClass = 'status-cheker__status-description';

  return (
    <div className="status-cheker__wrapper">
      <HeaderElement className={headerClass}>Статус с сайта info.midpass.ru</HeaderElement>
      <TextBlock className={descriptionClass}>{pasportData.passportStatus.name}</TextBlock>
      <HeaderElement className={headerClass}>Прогресс в процентах с сайта info.midpass.ru</HeaderElement>
      <TextBlock className={descriptionClass}>{pasportData.internalStatus.percent}%</TextBlock>
      <HeaderElement className={headerClass}>Расширенный статус с сайта info.midpass.ru</HeaderElement>
      <TextBlock className={descriptionClass}>{pasportData.internalStatus.name}</TextBlock>
      <HeaderElement className={headerClass}>Расшифровка статуса (по открытой информации в интернете)</HeaderElement>
      <TextBlock className={descriptionClass}>
        <StatusExplanation pasportData={pasportData} />
      </TextBlock>
    </div>
  )
}