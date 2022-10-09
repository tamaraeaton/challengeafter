import { PropsWithChildren, FunctionComponent } from "react";
import FetchTVShows from "../../utils/TVShowAPI";

export interface ListProps {}

const List: FunctionComponent<PropsWithChildren<ListProps>> = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {/* {FetchTVShows.map((data: any) => {
            return (
              <tr>
                <td>{data.name}</td>
              </tr>
            );
          })} */}
        </tbody>
      </table>
    </div>
  );
};

export default List;
