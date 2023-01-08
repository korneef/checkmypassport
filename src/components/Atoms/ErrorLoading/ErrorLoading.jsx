export default function ErrorLoading({uid}) {
  return <div className="status-checker__fail">
    Что то пошло не так и мы не смогли загрузить данные о вашем паспорте. Еще раз проверьте номер заявления и повторите попытку. Если вы уверены, что данные введены верно, сообщите об ошибке на электронный адрес <a href={`mailto:issue.checkmypassport@gmail.com?body=Не могу получить информацию по заявлению ${uid}&subject=Проблема с номером заявления ${uid}?`}>issue.checkmypassport@gmail.com</a>
  </div>
}