import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { serviceGetImages } from "api";
import { ErrorMsg, Layout } from "./Layout";
import { GlobalStyle } from "./GlobalStyle";
import { Loader } from "./Loader/Loader";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";
import {EndGallery} from "./EndGallery/EndGallery"
import Modal from "./Modal/Modal";

export class App extends Component {
  state = {
    gallery: [],
    query: {
      searchString: '',
      page: 1,
      perPage: 12,
      totalHits: 0,
      timeStamp: null,
    },
    loader: false,
    error: false,
    errorObj: '',
    showModal: false,
    bigImgUrl: '',
  }

  async componentDidUpdate(prevProps, prevState){
    if (prevState.query.timeStamp !== this.state.query.timeStamp || prevState.query.page !== this.state.query.page){
      try {
        this.setState({loader: true, error: false});
        const responce = await serviceGetImages(this.state.query);
        this.setState(prevState=>({gallery: [...prevState.gallery, ...responce.hits], query: {...prevState.query, totalHits: responce.totalHits}}))
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
    this.setState(prevState=>({query: {...prevState.query, searchString: ev.target.search.value, page: 1, timeStamp: Date.now()},
    gallery: [],}));
  }

  handleLoadMore = () =>{
    this.setState(prevState=>({query: {...prevState.query, page: prevState.query.page + 1}}));
  }

  scrollUp(){
    const height = (window.innerHeight - 128) / 18;
    function scr(){
      window.scrollBy(0, height)
    }
    for (let i = 1; i < 19; i++) {
      const delay = i*50;
      setTimeout(scr, delay);
    }
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  handleImgClick = (bigImgUrl) =>{
    this.setState({bigImgUrl, showModal: true})
  }

  render (){
    const { loader, error, showModal, bigImgUrl, query: {page, perPage, totalHits} } = this.state;
    const showGallery = (this.state.gallery.length>0);
    const showEndGallery = ((totalHits / perPage) < page);
    const showBtnMore = !showEndGallery && showGallery;
    const showError = error && !showEndGallery;
    
    return(
      <Layout>
        <Searchbar search={this.state.query.searchString} onChange={this.handleChange} onSubmit={this.handleSubmit} />
        {showGallery && <ImageGallery gallery={this.state.gallery} onClick={this.handleImgClick}/>}
        {loader && <Loader />}
        {showBtnMore && <Button onClick={this.handleLoadMore} />}        
        {showEndGallery && totalHits && <EndGallery />}
        {(!loader && !showGallery && this.state.query.timeStamp) && <ErrorMsg>Sorry, but nothing was found for your query. Try changing the request.</ErrorMsg>}
        {showError && <ErrorMsg>Sorry, something went wrong. Try reload page</ErrorMsg>}
        {showModal && <Modal onClose={this.toggleModal} ><img src={bigImgUrl} alt='zoomed' /></Modal>}
        <GlobalStyle />
      </Layout>
    )
  };
};
