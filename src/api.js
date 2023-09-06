import axios from 'axios';

// const numByVert = ~~((window.innerHeight - 96) / 260);
// const imgHeight = ~~((window.innerHeight - 96) / numByVert);
// const numByHoriz = ~~((window.innerWidth - 32) /(imgHeight + 16));
// const imgNumber = numByHoriz * numByVert;
// console.log("imgH= ", imgHeight);

const configAx = {
  method: 'get',
  baseURL: 'https://pixabay.com/api/',
  params: {
    key: '38368366-a7227dffd937457d386778604',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 12,
  },
};

async function serviceGetImages({searchString, page}) {
  configAx.params.q = searchString;
  configAx.params.page = page;
  const { data } = await axios('', configAx);
  return data.hits;
}

export { serviceGetImages };
