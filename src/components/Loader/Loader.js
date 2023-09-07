import { SquareLoader } from 'react-spinners';
import { Wrapper } from './Loader.styled';

export const Loader = () => {
  return (
    <Wrapper>
      <SquareLoader color={({ theme }) => theme.colors.green} />
    </Wrapper>
  );
};
