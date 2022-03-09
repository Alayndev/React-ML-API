import React from "react";
import { SearchForm } from "./SearchForm";
import { SearchResultItem } from "./SearchResultItem";

class App extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    };
  }

  render() {
    const handleSearch = async (wordToSearch) => {
      const res = await fetch(
        "https://api.mercadolibre.com/sites/MLA/search?q=" + wordToSearch
      );
      const results = await res.json();

      this.setState({
        results: results.results,
      });
    };

    console.log("render App");

    return (
      <>
        <header className="header">
          <div className="header-content">
            <SearchForm onSearch={handleSearch}></SearchForm>
          </div>
        </header>

        <div className="container">
          <h3 className="results-title">
            Resultados:{" "}
            <span className="results-count">{this.state.results.length}</span>
          </h3>

          <div className="results">
            {this.state.results.map((r) => (
              <SearchResultItem
                key={r.id}
                title={r.title}
                price={r.price}
                img={r.thumbnail}
                link={r.permalink}
                stock={r.available_quantity}
                sold={r.sold_quantity}
                condition={r.condition}
              />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export { App };
