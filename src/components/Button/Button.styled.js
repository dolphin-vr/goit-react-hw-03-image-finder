import styled from "styled-components";


export const Panel = styled.div`
   /* bottom: 0; */
   top: 0;
  left: 0;
  position: sticky;
  /* position: absolute; */
  z-index: 1100;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: transparent;
  /* background-color: yellow; */
  /* box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); */
`

export const LoadMore = styled.button`
width: calc(100% / 3);
`
