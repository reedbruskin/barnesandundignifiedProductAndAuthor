import React from 'react';
import ReactDOM from "react-dom";
class ProductDetails extends React.Component {
  render() {
    const series = this.props.record.series;
    const edition = this.props.record.editionDescription;
    const dimensions = this.props.record.productDimensions;
    const size = this.props.record.fileSize;

    let seriesRender;
    if (series !== "") {
      seriesRender = <tr>
                        <th>Series: </th>
                        <td>{series}</td>
                      </tr>
    }

    let editionRender;
    if (edition !== "") {
    editionRender = <tr>
                      <th>Edition description: </th>
                      <td>{edition}</td>
                    </tr>
    }

    let dimensionsRender;
    if (dimensions !== "") {
    dimensionsRender = <tr>
                         <th>Product dimensions: </th>
                         <td>{dimensions}</td>
                       </tr>
    }

    let sizeRender;
    if (size !== "") {
      sizeRender = <tr>
                      <th>File size: </th>
                      <td>{size}</td>
                  </tr>

    }

    const dateStr = this.props.record.publicationDate;
    let dateRender;
    let date = new Date(dateStr);
    dateRender= <tr>
                  <th>Publication Date: </th>
                  <td>{date.toLocaleDateString('en-US')}</td>
                </tr>

    return (

      <table className="table">
        <tbody>
          <tr>
            <th>ISBN-13: </th>
            <td>{this.props.record.isbn13}</td>
          </tr>
          <tr>
            <th>Publisher: </th>
            <td>
              <a href={this.props.record.publisherLink}>{this.props.record.publisherName}</a>
            </td>
          </tr>

        {dateRender}
        <tr>
          <th>Pages: </th>
          <td>{this.props.record.pages}</td>
        </tr>
        <tr>
          <th>Sales Rank: </th>
          <td>{this.props.record.salesRank}</td>
        </tr>
        {seriesRender}
        {editionRender}
        {dimensionsRender}
        {sizeRender}

        </tbody>
      </table>



    );
  }
}


export default ProductDetails;