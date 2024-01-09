import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../features/cartSlice";

function cartpage() {
  let { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.allCart
  );



  const dispatch = useDispatch();

  const handleRemoveItem = (itemId) => {
    dispatch(removeFromCart(itemId));
  };
  const handleQuantityChange = (itemId, newQuantity) => {
    dispatch(
      addToCart({ id: itemId, quantity: newQuantity }, () => {
        dispatch(gettartiotal());
      })
    );
  };

  return (
    <div>
      <div className="container mt-5">
        <div className="row d-flex justify-content-center " id="#top">
          <div className="col-sm-8 col-lg-8 ">
            <div className="card mt-5 ">
              {cart.map((items) => (
                <form key={items.id}>
                  <div className="card-header">
                    <h3>{items.title}</h3>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-6 border">
                        <img
                          className="card-image mt-3"
                          src={items.thumbnail}
                          alt="mobilePhone"
                        />
                      </div>
                      <div className="col-6 border ">
                        <div className="brand mt-3">
                          <h4>{items.brand}</h4>
                        </div>
                        <div className="description">
                          <p>{items.description}</p>
                        </div>
                        <div className="category">
                          <h4>{items.category}</h4>
                        </div>

                        <div className="contentgroup">
                          <div className="row mt-5">
                            <div className="col-6">
                              <div className="productPrice">
                                <h4 className="price">$ {items.price}</h4>
                              </div>
                            </div>
                            <div className="col-6">
                              <h4 className="stock text-primary">
                                Stock
                                <span className="productstock text-danger">
                                  {items.stock}
                                </span>
                              </h4>
                            </div>
                          </div>
                          <div className="row mt-5">
                            <div className="col-12">
                              <div className="d-flex justify-content-start small text-warning mb-2">
                                <div className="bi-star-fill">
                                  <i className="fa-solid fa-star"></i>
                                </div>
                                <div className="bi-star-fill">
                                  <i className="fa-solid fa-star"></i>
                                </div>
                                <div className="bi-star-fill">
                                  <i className="fa-solid fa-star"></i>
                                </div>
                                <div className="bi-star-fill">
                                  <i className="fa-solid fa-star"></i>
                                </div>
                                <div className="bi-star-fill">
                                  <i className="fa-solid fa-star"></i>
                                </div>
                                <div className="rating">
                                  <b>{items.rating}/ 5</b>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row mt-3">
                      <div className="col-5">
                        <h4 className="quantity">Quantity ➔</h4>
                      </div>
                      <div className="col-6">
                        <div className="incDec">
                          <span
                            onClick={() =>
                              handleQuantityChange(items.id, items.quantity - 1)
                            }
                          >
                            -
                          </span>
                          <input className="text-center"
                            type="text"
                            placeholder={0}
                            size={1}
                            value={items.quantity}
                            readOnly
                          ></input>

                          <span
                            onClick={() =>
                              handleQuantityChange(items.id, items.quantity + 1)
                            }
                          >
                            +
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="per-quantity-total mt-2">
                      <h5>
                        <span className="text-warning">
                          Total Amount for {items.title}:{" "}
                        </span>
                        <span className="text-primary">$</span>
                        <span className="text-danger">
                          {items.price * items.quantity}
                        </span>
                      </h5>
                    </div>
                    <div className="btnGroup d-flex justify-content-between">
                      <button className="btn btn-primary Cart-button" disabled>
                        Home
                      </button>

                      <button
                        className="btn btn-danger Cart-button"
                        onClick={() => handleRemoveItem(items.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </form>
              ))}
            </div>
          </div>

          <div className="col-sm-4 col-lg-4  ">
            <div className="card mt-5 ">
              <div className="card-header  ">
                <h4>Summary</h4>
              </div>
              <div className="card-body">
                <h6 className="mt-4">
                  Total Quantity &nbsp; <span>{totalQuantity}</span>
                </h6>
                <h6 className="mt-3 mb-3">
                  Total Amount &nbsp; <span>{totalPrice}</span>
                </h6>
                <button className="btn btn-primary">Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default cartpage;
