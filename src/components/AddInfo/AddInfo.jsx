import { NavLink } from 'react-router-dom';
import { AddInfoContainer } from './AddInfo.styled';

export const AddInfo = () => {
  return (
    <AddInfoContainer>
      <h3>Additional information</h3>
      <ul>
        <li>
          <NavLink to={`cast`}>Cast</NavLink>
        </li>
        <li>
          <NavLink to={`reviews`}>Reviews</NavLink>
        </li>
      </ul>
    </AddInfoContainer>
  );
};
