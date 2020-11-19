import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ProductDetails from './productDetails.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      book: {
        isbn13: '',
        publisherName: '',
        publisherLink: '',
        publicationDate: '',
        series: '',
        editionDescription: '',
        pages: undefined,
        salesRank: undefined,
        productDimensions: '',
        fileSize: '',
        note: '',
        ageRange: '',
        soldBy: '',
        format: '',

      }
    };
  }

  componentDidMount() {
    axios.get('/products/53211470974772')
      .then((response)=> {
      // handle success
        console.log('get a specific book:', response);
        this.setState({book: response.data});
      })
      .catch((error)=> {
      // handle error
        console.log('error:', error);
      });

  }

  render() {
    return (
      <div>
        <h2 className="productDetails">Product Details</h2>
        <ProductDetails
          record={this.state.book}
        />
      </div>
    );
  }
}


export default App;