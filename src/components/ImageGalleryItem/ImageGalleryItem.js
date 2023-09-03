import { GalleryItem, GalleryImage } from "./ImageGalleryItem.styled"

export const ImageGalleryItem = ({url, tags})=>{
   return(
      <GalleryItem>
         <GalleryImage src={url} alt={tags} />
      </GalleryItem>
   )
}
