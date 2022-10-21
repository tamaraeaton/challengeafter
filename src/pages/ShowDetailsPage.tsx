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
      <div>{Show.show.name}</div>
      <div></div>
    </div>
  );
};

export default ShowDetailsPage;
