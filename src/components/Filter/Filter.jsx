import PropTypes from 'prop-types';
import { FilterWrapper, FilterTitle, FilterInput } from './Filter.styled';

export const Filter = ({ handleFilterValue, value }) => {
  return (
    <FilterWrapper>
      <FilterTitle>Find contacts by name</FilterTitle>
      <FilterInput
        type="text"
        name="filter"
        placeholder="Rosie Simpson"
        value={value}
        onChange={handleFilterValue}
      />
    </FilterWrapper>
  );
};

Filter.propTypes = {
  handleFilterValue: PropTypes.func.isRequired,
  value: PropTypes.string,
};
