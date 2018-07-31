import '../assets/styles/footer.styl'

export default {
  data() {
    return {
      author: 'li'
    }
  },
  render() {
    return (
      <footer id="foot">
        <span>Write by {this.author}</span>
      </footer>
    )
  }
}
