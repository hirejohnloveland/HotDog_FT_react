import React, { Component } from "react";

class OrderItem extends Component {
  render() {
    const item = this.props.item;

    return (
      <div className="card mb-3 w-100">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              className="card-img-top img-fluid"
              src={item.image}
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title mt-3">{item.name}</h3>
              <h5 className="card-text mt-3">{item.desc}</h5>
              <h5 className="card-text mt-3">{item.price}</h5>
              <button
                onClick={() => this.props.onDelete(item.oid)}
                className="btn btn-danger mt-3"
              >
                Remove from Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OrderItem;
