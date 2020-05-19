import React from "react";
import { graphql } from "react-apollo";
import { gql } from "apollo-boost";
import { flowRight } from "lodash";

import CollectionItem from "./collection-item.component";

const ADD_ITEM_TO_CART = gql`
  mutation AddItemToCart($item: Item!) {
    addItemToCart(item: $item) @client
  }
`;

const CollectionItemContainer = ({ addItemToCart, ...otherProps }) => (
  <CollectionItem
    {...otherProps}
    addItem={(item) => addItemToCart({ variables: { item } })}
  />
);

export default flowRight(graphql(ADD_ITEM_TO_CART, { name: "addItemToCart" }))(
  CollectionItemContainer
);
