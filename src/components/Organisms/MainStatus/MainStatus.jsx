import { StatusExplanation, Header, TextBlock } from "../../index"


export default function MainStatus({ pasportData }) {
  const headerClass = 'status-cheker__status-header';
  const descriptionClass = 'status-cheker__status-description';

  return (
    <div className="status-cheker__wrapper">
      <Header className={headerClass}>Статус с сайта info.midpass.ru</Header>
      <TextBlock className={descriptionClass}>{pasportData.passportStatus.name}</TextBlock>
      <Header className={headerClass}>Прогресс в процентах с сайта info.midpass.ru</Header>
      <TextBlock className={descriptionClass}>{pasportData.internalStatus.percent}%</TextBlock>
      <Header className={headerClass}>Расширенный статус с сайта info.midpass.ru</Header>
      <TextBlock className={descriptionClass}>{pasportData.internalStatus.name}</TextBlock>
      <Header className={headerClass}>Расшифровка статуса (по открытой информации в интернете)</Header>
      <TextBlock className={descriptionClass}>
        <StatusExplanation pasportData={pasportData} />
      </TextBlock>
    </div>
  )
}