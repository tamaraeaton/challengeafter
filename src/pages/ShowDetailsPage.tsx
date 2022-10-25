import { FunctionComponent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Show } from "../modules/ShowTypes";

interface ShowDetailsPageProps {
  TVShows: Show[];
}

const ShowDetailsPage: FunctionComponent<ShowDetailsPageProps> = ({
  TVShows,
}) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const Show = TVShows.find((show) => show.show.id === Number(id));

  useEffect(() => {
    if (!Show) {
      navigate("/");
    }
  }, [Show, navigate]);

  if (!Show) {
    return null;
  }

  return (
    <div>
      <div>
        <img
          src={
            Show.show.image?.medium
              ? Show.show.image?.medium
              : "https://www.wolflair.com/wp-content/uploads/2017/01/placeholder.jpg"
          }
          alt={Show.show.name}
          width="100px"
        />
      </div>
      <div>{Show.show.name}</div>
      <div>{Show.show.status}</div>
      <div>{Show.show.rating.average}</div>

      <div>
        {Show.show.ended
          ? `${Show.show.premiered} - ${Show.show.ended}`
          : Show.show.premiered}
      </div>
    </div>
  );
};

export default ShowDetailsPage;

//`premiered` to `ended` (if show is not ended, just show `premiered`)

//if ended date is true, compare against current date
