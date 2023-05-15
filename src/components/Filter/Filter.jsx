import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import { getFilteredName } from 'redux/selectors';
import { nanoid } from 'nanoid';
import { Input } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(getFilteredName);

  const dispatch = useDispatch();

  const id = nanoid(10);

  const handleChangeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <>
      <label htmlFor={id}>Find contacts by name</label>
      <Input type="text" value={filter} id={id} onChange={handleChangeFilter} />
    </>
  );
};
