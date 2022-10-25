import { PropsWithChildren, FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import { Show } from "../../modules/ShowTypes";
export interface ListProps {
  showData: Show[];
}

const List: FunctionComponent<PropsWithChildren<ListProps>> = ({
  showData,
}) => {
  const navigate = useNavigate();
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Score</th>
            <th>Name</th>
            <th>Poster</th>
            <th>Rating: Average</th>
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
