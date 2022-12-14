import { PropsWithChildren, FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import { Show } from "../../modules/ShowTypes";
import { SortShowsTypes } from "../../utils/sortShowFunction";
import SortButton from "../SortButton/SortButton";
import "./List.css";
export interface ListProps {
  showData: Show[];
  // void because it is not returning anything
  // parameter is equal to the parameter on the Home
  onUpdateSort: (sortType: SortShowsTypes) => void;
  isReversed: boolean;
  onClear: () => void;
}

const List: FunctionComponent<PropsWithChildren<ListProps>> = ({
  showData,
  onUpdateSort,
  isReversed,
  onClear,
}) => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>You have found {showData.length} records.</h2>
      <button onClick={onClear}>Clear Results</button>
      <table className="center">
        <thead>
          <tr>
            {/* Add Onclick for header sort */}
            <th>Score</th>
            <th>
              Name
              <SortButton
                onClick={() => onUpdateSort(SortShowsTypes.NAME)}
                isReversed={isReversed}
              />
            </th>
            <th>Poster</th>
            <th>
              Rating: Average
              <SortButton
                onClick={() => onUpdateSort(SortShowsTypes.RATING)}
                isReversed={isReversed}
              />
            </th>
            <th>See Details</th>
          </tr>
        </thead>
        <tbody>
          {showData.map((data) => {
            const scorePercentage = data.score.toFixed(2).split(".")[1];
            return (
              <tr key={data.show.id}>
                <td>{scorePercentage}%</td>
                <td>{data.show.name}</td>
                <td>
                  <img
                    src={
                      data.show.image?.medium
                        ? data.show.image?.medium
                        : "https://www.wolflair.com/wp-content/uploads/2017/01/placeholder.jpg"
                    }
                    alt={data.show.name}
                    width="50px"
                  />
                </td>
                <td>{data.show.rating.average}</td>
                <td>
                  <button onClick={() => navigate(`/show/${data.show.id}`)}>
                    See Details
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default List;
