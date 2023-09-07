import { Panel, SearchForm, StyledInput, SubmitBtn } from "./Searchbar.styled";
import { ImSearch } from "react-icons/im";

export const Searchbar = ({search, onChange, onSubmit, num})=>{
   return (
      <Panel>
         <SearchForm  onSubmit={onSubmit}>
            <StyledInput value={search} onChange={onChange}
               placeholder="What do you want to search?"
               name="search"
               required
               autoFocus/>
               <SubmitBtn type="submit">
                  <ImSearch />
               </SubmitBtn>
         </SearchForm>
      </Panel>
   )
}