import { GalleryItem, GalleryImage } from "./ImageGalleryItem.styled"

export const ImageGalleryItem = ({url, tags, href, onClick})=>{
   return(
      <GalleryItem>
         <GalleryImage src={url} alt={tags} onClick={()=>onClick(href)}/>
      </GalleryItem>
   )
}
