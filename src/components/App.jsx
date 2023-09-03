import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { serviceGetImages } from "api";
import { Loader } from "./Loader/Loader";
import { ImageGallery } from "./ImageGallery/ImageGallery";

export class App extends Component {
  state = {
    gallery: [],
    query: {
      searchString: '',
      page: 1,
      timeStamp: null,
    },
    loader: false,
    error: false,
  }

  async componentDidUpdate(prevProps, prevState){
    if (prevState.query.timeStamp !== null && prevState.query.timeStamp !== this.state.query.timeStamp){
      try {
        this.setState({loader: true, error: false});
        const gallery = await serviceGetImages(this.state.query);
        this.setState({gallery})
      } catch (error) {
        this.setState({ error: true });
      } finally {
        this.setState({ loader: false });        
      }
    }
  }

  
  handleChange = (ev) => {
    // console.log(ev.target.value);
    this.setState({query: {searchString: ev.target.value}})
  }

  handleSubmit = (ev) =>{
    ev.preventDefault();
    // ()=>{prevState=>console.log('prevState= ', prevState)}()
    console.log('form= ', ev.target.search.value)
    this.setState({query: {searchString: ev.target.search.value, page: 1, timeStamp: Date.now()}});
    console.log(this.state)
  }


  render (){
    return(
      <div>
      <Searchbar search={this.state.query.searchString} onChange={this.handleChange} onSubmit={this.handleSubmit}/>
      {this.state.loader && <Loader/>}
      {this.state.gallery.length>0 && <ImageGallery gallery={this.state.gallery}/>}
    </div>
    )
  };
};
