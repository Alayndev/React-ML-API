import React from "react";

type SearchResultItemProps = {
  title: string;
  price: number;
  img: string;
  link: string;
  stock: number;
  sold: number;
  condition: string;
};

class SearchResultItem extends React.Component<SearchResultItemProps, any> {
  render() {
    console.log("render SearchResultItem");

    return (
      <>
        <div className="result-item">
          <img src={this.props.img} alt="item" className="result-item-img" />
          <div className="result-item-subcontainer-content">
            <h4 className="result-item-title">Título: {this.props.title}</h4>
            <p className={this.props.condition == "new" ? "new" : "used"}>
              {this.props.condition === "new" ? "Nuevo" : "Usado"}
            </p>
            <p className="result-item-sold-quantity">
              Vendidos: <span className="sold-quantity">{this.props.sold}</span>
            </p>
          </div>
          <div className="result-item-subcontainer-price-stock">
            <div className="result-item-price">Precio: ${this.props.price}</div>
            <p className="result-item-stock">
              Stock: <span className="stock-counter"> {this.props.stock} </span>
            </p>

            <p className="result-item-stock">
              <a
                className="stock-counter"
                href={this.props.link}
                target="_blank"
              >
                Ver
              </a>
            </p>
          </div>
        </div>
      </>
    );
  }
}

export { SearchResultItem };
