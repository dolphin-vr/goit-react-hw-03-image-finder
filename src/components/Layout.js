import styled from 'styled-components';

export const Layout = styled.div`
  margin: 0 auto;
`;

export const Title = styled.h1`
   margin: ${({theme}) => theme.spacing(4)} auto ${({theme}) => theme.spacing(3)};
   display: flex;
   gap: ${({theme}) => theme.spacing(4)};
   align-items: center;
   font-size: 32px;
`

export const ErrorMsg = styled.div`
  margin: ${({theme}) => theme.spacing(8)} auto;
  font-size: 24px;
  font-weight: 500;
  text-align: center;
`