class SearchView {
  _parentEl = document.querySelector('.search');
  getQuery() {
    const query = this._parentEl.querySelector('.search__field').value;
    this._clearInput();
    return query;
  }
  _clearInput() {
    return (this._parentEl.querySelector('.search__field').value = '');
  }
  addHandlerSearch(handler) {
    this._parentEl.addEventListener('submit', function (e) {
      e.preventDefault(); // To prevent reloading of page
      handler(); // You can pass function in a function, here handler is the controlSearchResults function in controller.js
    });
  }
}
export default new SearchView();
