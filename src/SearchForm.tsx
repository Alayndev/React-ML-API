import React from "react";

type SearchFormProps = {
  onSearch: Function;
};

class SearchForm extends React.Component<SearchFormProps, any> {
  render() {
    console.log("render SearchForm");

    const handleSubmit = (e) => {
      e.preventDefault();

      if (this.props.onSearch) {
        this.props.onSearch(e.target.search.value);
      }
    };

    return (
      <>
        <form className="search-form" onSubmit={handleSubmit}>
          <input
            name="search"
            type="text"
            className="search-input"
            placeholder=" Buscar productos, marcas y más..."
            required
          />
          <button className="search-button">Buscar</button>
        </form>
      </>
    );
  }
}

export { SearchForm };
