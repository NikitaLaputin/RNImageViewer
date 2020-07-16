class LocalImageModel {
  constructor({ id, source, caption, description }) {
    this.id = id;
    this.url = '';
    this.props = {
      source,
    };
    this.caption = caption;
    this.description = description;
  }
}

export default LocalImageModel;
