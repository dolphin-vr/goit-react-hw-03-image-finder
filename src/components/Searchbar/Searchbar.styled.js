import styled from 'styled-components';

export const Panel = styled.div`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: ${({ theme }) => theme.spacing(16)};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  color: #fff;
  background-color: ${({ theme }) => theme.colors.green};
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const SearchForm = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  width: calc(100% / 3);
`;

export const StyledInput = styled.input`
  width: 100%;
  display: inline-block;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  margin-left: auto;
  margin-right: auto;
  padding: ${({ theme }) => theme.spacing(1)};
  padding-right: ${({ theme }) => theme.spacing(7)};
`;

export const SubmitBtn = styled.button`
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  background-color: transparent;
    /* background-color: ${({ theme }) => theme.colors.grey}; */
  border: none;
`;
