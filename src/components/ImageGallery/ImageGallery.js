import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import { Gallery } from "./ImageGallery.styled"

export const ImageGallery = ({gallery, onClick}) =>{
   return(
      <Gallery>
         {gallery.map(el=><ImageGalleryItem key={el.id} url={el.webformatURL} tags={el.tags} href={el.largeImageURL} onClick={onClick}/>)}
      </Gallery>
   )
}
