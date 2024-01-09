import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function NavBar() {
  const { totalQuantity, totalPrice } = useSelector((state) => state.allCart);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container px-4 px-lg-5">
          <Link to={"/"} className="btn btn-outline-light mt-1" type="submit">
            <h5>Continue Shopping</h5>
          </Link>
          <button
            className="navbar-toggler bg-light "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div
            className="navbar-collapse collapse show"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4"></ul>
            <div className="Cart-Total me-5 mt-3 text-white">
              <h4>
                Total Amount
                <span className="text-warning"> $ {totalPrice}</span>
              </h4>
            </div>

            <div className="d-flex mt-2">
              <Link
                to={"/cart"}
                className="btn btn-outline-light"
                type="submit"
              >
                <span className="arrow ">
                  <b>➔</b>
                </span>{" "}
                <i className="fa-solid fa-cart-shopping me-2"></i>
                Cart
                <span className="badge bg-dark text-light ms-1 rounded-pill">
                  {totalQuantity}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
