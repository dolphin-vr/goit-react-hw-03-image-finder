import axios from 'axios';

const configAx = {
  method: 'get',
  baseURL: 'https://pixabay.com/api/',
  params: {
    key: '38368366-a7227dffd937457d386778604',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 40,
  },
};

async function serviceGetImages({searchString, page}) {
  configAx.params.q = searchString;
  configAx.params.page = page;
  const { data } = await axios('', configAx);
  return data.hits;
}

export { serviceGetImages };
