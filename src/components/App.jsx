import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { serviceGetImages } from "api";
import { Layout } from "./Layout";
import { GlobalStyle } from "./GlobalStyle";
import { Loader } from "./Loader/Loader";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";
import {EndGallery} from "./EndGallery/EndGallery"

export class App extends Component {
  state = {
    gallery: [],
    query: {
      searchString: '',
      page: 1,
      perPage: 12,
      timeStamp: null,
    },
    loader: false,
    error: false,
    errorObj: '',
  }

  async componentDidUpdate(prevProps, prevState){
    if (prevState.query.timeStamp !== this.state.query.timeStamp || prevState.query.page !== this.state.query.page){
      try {
        this.setState({loader: true, error: false});
        const gallery = await serviceGetImages(this.state.query);
        this.setState(prevState=>({gallery: [...prevState.gallery, ...gallery]}))
      } catch (error) {
        this.setState({ error: true, errorObj: error });
      } finally {
        this.setState({ loader: false });        
      }
    }
    if (prevState.gallery !== this.state.gallery && this.state.query.page !== 1){
      this.scrollUp()
    }
  }
  
  handleChange = (ev) => {
    this.setState(prevState=>({query: {...prevState.query, searchString: ev.target.value}}))
  };
  
  handleSubmit = (ev) =>{
    ev.preventDefault();
    this.setState({query: {searchString: ev.target.search.value, page: 1, timeStamp: Date.now()},
    gallery: [],});
  }

  handleLoadMore = () =>{
    this.setState(prevState=>({query: {...prevState.query, page: prevState.query.page + 1}}));
  }

  scrollUp(){
    const height = window.innerHeight / 18;
    console.log(window.innerHeight, height)
    function scr(){
      window.scrollBy(0, height)
    }
    for (let i = 1; i < 19; i++) {
      const delay = i*50;
      setTimeout(scr, delay);
    }
  }

  render (){
    const showGallery = (this.state.gallery.length>0);
    const showEndGallery = this.state.error && this.state.errorObj.response.data.includes('page');
    const showBtnMore = !showEndGallery && showGallery;
    const showError = this.state.error && !showEndGallery;
    
    return(
      <Layout>
        <Searchbar search={this.state.query.searchString} onChange={this.handleChange} onSubmit={this.handleSubmit} num={this.state.gallery.length}/>
        {showGallery && <ImageGallery gallery={this.state.gallery} />}
        {this.state.loader && <Loader />}
        {showBtnMore && <Button onClick={this.handleLoadMore} />}        
        {showEndGallery && <EndGallery />}
        {showError && <div>Sorry, something went wrong. Try reload page</div>}
        <GlobalStyle />
      </Layout>
    )
  };
};