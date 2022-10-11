import { ListInput } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterContact, selectFilter } from 'redux/filterSlice';
import { createContext } from 'react';
export const UseContext = createContext();

export const Filter = () => {
  const dispatch = useDispatch();
  const valueFilter = useSelector(selectFilter);

  const handlechange = query => {
    dispatch(filterContact(query.target.value.toLowerCase().trim()));
  };

  return <ListInput type="text" value={valueFilter} onChange={handlechange} />;
};
