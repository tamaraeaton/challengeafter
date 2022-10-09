import React, { FunctionComponent, PropsWithChildren } from "react";

export interface ItemProps {
  name: string;
}

const Item: FunctionComponent<PropsWithChildren<ItemProps>> = ({ name }) => {
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

export default Item;
