import React from "react";
import { graphql } from "react-apollo";
import { gql } from "apollo-boost";
import { flowRight } from "lodash";

import CartIcon from "./cart-icon.component";

const GET_CART_ITEMS_COUNT = gql`
  {
    cartItemsCount @client
  }
`;

const TOGGLE_CART_HIDDEN = gql`
  mutation ToggleCartHidden {
    toggleCartHidden @client
  }
`;

const CartIconContainer = ({ data: { cartItemsCount }, toggleCartHidden }) => (
  <CartIcon toggleCartHidden={toggleCartHidden} itemCount={cartItemsCount} />
);

/******
 * 
 * Also can be done like this
 * 
 * const CartIconContainer = (props) => {
  const { toggleCartHidden } = props;
  const { cartItemsCount } = props.data;
  return (
    <CartIcon toggleCartHidden={toggleCartHidden} itemCount={cartItemsCount} />
  );
};
 */

export default flowRight(
  graphql(GET_CART_ITEMS_COUNT),
  graphql(TOGGLE_CART_HIDDEN, { name: "toggleCartHidden" })
)(CartIconContainer);

/****
 * 
 * <Mutation mutation={TOGGLE_CART_HIDDEN}>
    {(toggleCartHidden) => (
      <Query query={GET_CART_ITEMS_COUNT}>
        {({ data: { cartItemsCount } }) => (
          <CartIcon
            toggleCartHidden={toggleCartHidden}
            itemCount={cartItemsCount}
          />
        )}
      </Query>
    )}
  </Mutation>
 */
