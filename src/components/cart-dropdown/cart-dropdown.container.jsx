import React from "react";
import { graphql } from "react-apollo";
import { gql } from "apollo-boost";
import { flowRight } from "lodash";

import CartDropdown from "./cart-dropdown.component";

const GET_CART_ITEMS = gql`
  {
    cartItems @client
  }
`;

const TOGGLE_CART_HIDDEN = gql`
  mutation ToggleCartHidden {
    toggleCartHidden @client
  }
`;

const CartDropdownContainer = ({ data: { cartItems }, toggleCartHidden }) => (
  <CartDropdown toggleCartHidden={toggleCartHidden} cartItems={cartItems} />
);

export default flowRight(
  graphql(GET_CART_ITEMS),
  graphql(TOGGLE_CART_HIDDEN, { name: "toggleCartHidden" })
)(CartDropdownContainer);
