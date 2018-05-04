import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PhotoContainer, PhotoBody } from '../../ui/Styles';
class FlickrList extends Component {
  constructor(props) {
    super(props);
    const { filterValue } = props;
    this.state = { title: filterValue.title };
  }

  componentDidMount() {
    if (this.props.photos.length < 1) {
      this.props.appGetData();
    }
  }

  onSelectChange = e => {
    const { filterPhotos, filterValue } = this.props;
    filterPhotos({ ...filterValue, value: Number(e.target.value) });
  };

  onTitleChange = e => {
    const { filterPhotos, filterValue } = this.props;
    this.setState({ title: e.target.value });
    filterPhotos({ ...filterValue, title: e.target.value });
  };

  render() {
    const { filterValue, photos } = this.props;
    const { title } = this.state;
    return (
      photos && (
        <PhotoContainer>
          <select onChange={this.onSelectChange} value={filterValue.value}>
            <option value={25}>Up to 25 photos</option>
            <option value={50}>Up to 50 photos</option>
            <option value={100}>Up to 50 photos</option>
          </select>
          <label>
            Filter by Title
            <input onChange={this.onTitleChange} type="text" value={title} />`
          </label>
          <div>
            {photos &&
              photos.map(photo => {
                return (
                  <PhotoBody key={photo.id}>
                    <img
                      alt={photo.title}
                      src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${
                        photo.id
                      }_${photo.secret}.jpg`}
                    />
                    <p>{photo.title}</p>
                  </PhotoBody>
                );
              })}
          </div>
        </PhotoContainer>
      )
    );
  }
}

FlickrList.propTypes = {
  appGetData: PropTypes.func.isRequired,
  filterPhotos: PropTypes.func.isRequired,
  filterValue: PropTypes.shape({
    title: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired
  }),
  photos: PropTypes.arrayOf(PropTypes.object.isRequired)
};

export default FlickrList;
