import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { addToCart } from "../features/cartSlice";

function Prroductcard() {
  const { totalQuantity } = useSelector((state) => state.allCart);

  const items = useSelector((state) => state.allCart.items);
  const dispatch = useDispatch();

  console.log(items);
  return (
    <div className="container mt-5">
      <section className="container main-cartSection">
        <h1>Shoping Cart</h1>
        <p className="totalItems">
          you have <span className="total-items-count">{totalQuantity}</span>{" "}
          items in shoping cart
        </p>
      </section>

      <div className="row ">
        {items.map((items) => {
          return (
            <div className="col-sm-12 col-lg-4" key={items.id}>
              <div className="card">
                <div className="card-header">
                  <h3>{items.title}</h3>
                  <img
                    className="card-image mt-3"
                    src={items.thumbnail}
                    alt="mobilePhone"
                  />
                </div>
                <div className="card-body">
                  <div className="productPrice">
                    <h4 className="price">
                      <span className="text-warning">$ </span>
                      <span className="text-danger">{items.price}</span>{" "}
                    </h4>
                  </div>
                  <a
                    onClick={() => dispatch(addToCart(items))}
                    className="btn btn-primary"
                  >
                    Add to Cart
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Prroductcard;
