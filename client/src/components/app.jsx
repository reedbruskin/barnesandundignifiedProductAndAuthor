import React from 'react';
import ReactDOM from "react-dom";
const axios = require('axios');
import ProductDetails from './productDetails.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        book: {
        isbn13: "",
        publisherName: "",
        publisherLink: "",
        publicationDate: "",
        series: "",
        editionDescription: "",
        pages: undefined,
        salesRank: undefined,
        productDimensions: "",
        fileSize: "",
      }
    };
  }

  componentDidMount() {
    axios.get('/product/22954906433789')
    .then((response)=> {
      // handle success
      console.log('get the specific book:', response);
      this.setState({book: response.data})
    })
    .catch((error)=> {
      // handle error
      console.log('error:', error);
    })

  }

  render() {
    return (
      <div>
        <h2 className="text--center mb-s">Product Details</h2>
       <ProductDetails
         record={this.state.book}
       />
      </div>
    );
  }
}


export default App;