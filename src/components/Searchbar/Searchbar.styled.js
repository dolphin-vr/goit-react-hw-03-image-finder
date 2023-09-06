import styled from "styled-components";


export const Panel = styled.div`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  margin-bottom: 8px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`

export const SearchForm = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  width: calc(100% / 3);
`

export const StyledInput = styled.input`
  width: 100%;
  display: inline-block;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  margin-left: auto;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 4px;
`

 export const SubmitBtn = styled.button`
    position: absolute;
    /* top: 0; */
    right: 0;
  display: flex;
  align-items: center;
    background-color: transparent;
    border: none;
 `