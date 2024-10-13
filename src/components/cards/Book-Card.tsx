import Styles from './styles/book-card.module.css';

function BookCard() {
  return (
    <div className={Styles['book']}>
      <div className={Styles['notepad']}>
        <p>Hello World</p>
      </div>
      <div className={Styles['cover']}>
        <p className={Styles['take-note']}>Take Note</p>
      </div>
    </div>
  );
}

export default BookCard;
