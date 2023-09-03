import { Panel, SearchForm, StyledInput } from "./Searchbar.styled"

export const Searchbar = ({search, onChange, onSubmit})=>{
   return (
      <Panel>
         <SearchForm  onSubmit={onSubmit}>
            <StyledInput value={search} onChange={onChange}
               placeholder="What do you want to search?"
               name="search"
               required
               autoFocus/>
         </SearchForm>
      </Panel>
   )
}