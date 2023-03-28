import { useSelector, useDispatch } from 'react-redux';
import { setFilter, getFilter } from 'redux/phoneBookSlice';
import { FilterWrapper, FilterTitle, FilterInput } from './Filter.styled';

export const Filter = () => {
  const filteredContacts = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleFilterValue = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <FilterWrapper>
      <FilterTitle>Find contacts by name</FilterTitle>
      <FilterInput
        type="text"
        name="filter"
        placeholder="Rosie Simpson"
        value={filteredContacts}
        onChange={handleFilterValue}
      />
    </FilterWrapper>
  );
};
