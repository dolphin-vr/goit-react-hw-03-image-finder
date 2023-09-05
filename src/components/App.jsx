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
    imgSizes: {
      imgHeight: 260,
      imgWidth: 320,
    },
    loader: false,
    error: false,
    errorObj: '',
  }
  componentDidMount(){
    const numByVert = ~~((window.innerHeight - 80) / 276);
    const imgHeight = ~~((window.innerHeight - 96 -  ((numByVert - 1) * 16)) / numByVert);
    const numByHoriz = ~~((window.innerWidth - 32) /(imgHeight + 16));
    const imgWidth = Math.round(imgHeight * 1.2308);
    const imgNumber = numByHoriz * numByVert;
    console.log('viewport= ', window.innerWidth, window.innerHeight);
    console.log('Wn x Hn = ', numByHoriz, ' x ', numByVert);
    console.log("img H * W= ", imgWidth, " x ", imgHeight);
    this.setState(({query: { perPage: imgNumber}, imgSizes: {imgHeight, imgWidth}}))
    // if (prevState.query.perPage !== imgNumber){
    //   this.setState(prevState=>({query: {...prevState.query, perPage: imgNumber, imgSizes: {imgHeight, imgWidth}}}))
    // }
  }

  async componentDidUpdate(prevProps, prevState){

    if (prevState.query.timeStamp !== this.state.query.timeStamp || prevState.query.page !== this.state.query.page){
      try {
        this.setState({loader: true, error: false});
        const gallery = await serviceGetImages(this.state.query);
        this.setState(prevState=>({gallery: [...prevState.gallery, ...gallery]}))
      } catch (error) {
        this.setState({ error: true, errorObj: error });
        // console.log("error= ", error)
      } finally {
        this.setState({ loader: false });        
      }
    }
  }
  
  handleChange = (ev) => {
    this.setState(prevState=>({query: {...prevState.query, searchString: ev.target.value}}))
  };
  
  handleSubmit = (ev) =>{
    ev.preventDefault();
    this.setState({query: {searchString: ev.target.search.value, page: 10, timeStamp: Date.now()},
    gallery: [],});
  }

  handleLoadMore = () =>{
    this.setState(prevState=>({query: {...prevState.query, page: prevState.query.page + 1}}))
  }

  // function goTopPage() {
  //   if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
  //     window.scrollBy(0, -50);
  //     setTimeout(goTopPage, 5);
  //   }
  // }

  render (){
    // console.log("this.state.error= ", this.state.error);
    const showGallery = (this.state.gallery.length>0);
    if (this.state.error) {
      // const errMsg = this.state.errorObj.response.data;
      // console.log("err msg = ", errMsg);
      // console.log('typeof = ', typeof errMsg);
    }
    const showEndGallery = this.state.error && this.state.errorObj.response.data.includes('page');
    const showBtnMore = !showEndGallery && showGallery;
    const showError = this.state.error && !showEndGallery;
    return(
      <Layout>
        <Searchbar search={this.state.query.searchString} onChange={this.handleChange} onSubmit={this.handleSubmit} num={this.state.gallery.length}/>
        {showGallery && <ImageGallery gallery={this.state.gallery} sizes={this.state.imgSizes}/>}
        {this.state.loader && <Loader />}
        {showBtnMore && <Button onClick={this.handleLoadMore} />}        
        {showEndGallery && <EndGallery />}
        {showError && <div>Sorry, something went wrong. Try reload page</div>}
        <GlobalStyle />
      </Layout>
    )
  };
};
