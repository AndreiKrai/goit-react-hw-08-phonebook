import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/phoneBook/selectors.phoneBook';
import { setFilter } from 'redux/phoneBook/PhoneBook.Slice';

export const Filter = () => {
  const dispatch = useDispatch();

  const filter = useSelector(selectFilter);

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <form action="">
      {/* Name input */}
      <div className="mb-3">
        <label htmlFor="filter" className="form-label">
          Find contacts by name
        </label>
        <input
          onChange={handleChange}
          value={filter}
          type="text"
          className="form-control"
          name="filter"
          id="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          aria-describedby="emailHelp"
          required
        />
        <div id="emailHelp" className="form-text">
          Name may contain only letters, apostrophe, dash and spaces. For
          example Adrian, Jacob Mercer, Charles de Batz de Castelmore
          d'Artagnan.
        </div>
      </div>
    </form>
  );
};
