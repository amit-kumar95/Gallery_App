import './index.css'

const ThumbnailItem = props => {
  const {thumbnailPictures, selectThumbnailImg} = props
  const {id, thumbnailUrl, thumbnailAltText} = thumbnailPictures

  const onClickThumbnailImg = () => {
    selectThumbnailImg(id)
  }

  return (
    <li className="listItems">
      <button
        className="Thumbnail_btn"
        type="button"
        onClick={onClickThumbnailImg}
      >
        <img
          className="thumbnail_img"
          src={thumbnailUrl}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
