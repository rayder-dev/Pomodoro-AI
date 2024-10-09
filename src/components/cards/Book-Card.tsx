import Styles from './styles/book-card.module.css';

function BookCard() {
  return (
    <div className={Styles['book']}>
      <p>Hello World</p>
      <div className={Styles['cover']}>
        <p>Notes</p>
      </div>
    </div>
  );
}

export default BookCard;
