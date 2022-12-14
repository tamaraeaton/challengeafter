import { FunctionComponent, PropsWithChildren } from "react";

export interface SortButtonPropTypes {
  onClick: () => void;
  isReversed: boolean;
}

const SortButton: FunctionComponent<PropsWithChildren<SortButtonPropTypes>> = ({
  onClick,
  isReversed,
}) => {
  return <button onClick={onClick}>{isReversed ? "^" : "v"}</button>;
};

export default SortButton;
