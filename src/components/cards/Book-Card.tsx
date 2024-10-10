import Pencil from '../Pencil';
import Styles from './styles/book-card.module.css';

function BookCard() {
  return (
    <div className={Styles['book']}>
      <div className={Styles['notepad']}>
        <div className={Styles['paper']} contentEditable="true">
          Hello, this is a notepad.
          <br />
          Click to write your notes.
        </div>
      </div>
      <div className={Styles['cover']}>
        <p>Take Note</p>
      </div>
    </div>
  );
}

export default BookCard;
