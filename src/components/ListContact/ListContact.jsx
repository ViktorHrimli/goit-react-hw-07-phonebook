import { ItemList, ItemListButton, ItemListParagr } from './ListContact.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContact } from 'redux/contactsSlice';
import { fetchRemoveContact } from 'redux/operations';
import { getFilterSelector } from 'redux/filterSlice';

export const Renderlist = () => {
  const dispatch = useDispatch();
  const handleClickRemove = id => dispatch(fetchRemoveContact(id));
  const selectorContact = useSelector(getContact);
  const selectorFilter = useSelector(getFilterSelector);

  const renderContact = selectorContact.filter(item =>
    item.name.toLowerCase().includes(selectorFilter)
  );

  return (
    renderContact.length > 0 &&
    renderContact.map(item => {
      console.log(item);
      return (
        <ItemList key={item.id}>
          <ItemListParagr>
            {item.name} {item.phone}
          </ItemListParagr>
          <ItemListButton
            type="button"
            onClick={() => handleClickRemove(item.id)}
          >
            Delete
          </ItemListButton>
        </ItemList>
      );
    })
  );
};
