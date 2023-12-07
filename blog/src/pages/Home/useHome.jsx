import { useEffect, useState } from "react";
import { usePageContext } from "./context";
import { entranceServices } from "../../services/entrances.services";

export const useHome = () => {
  const {
    state: { entrance, entrances, showModalDetails, search, refresh },
    setState,
  } = usePageContext();

  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);
    entranceServices
      .search(search)
      .then(({ data }) => {
        setState((old) => ({ ...old, entrances: data.entrances }));
      })
      .finally(() => {
        setFetching(false);
      });
  }, [search, refresh]);

  const handleSelectNotice = (notice) => {
    entranceServices
      .find(notice.id)
      .then(({ data }) => {
        setState((old) => ({
          ...old,
          entrance: data.entrance,
          showModalDetails: true,
        }));
      })
  };

  const handleCloseDetail = () => {
    setState((old) => ({ ...old, entrance: null, showModalDetails: false }));
  };

  return {
    setState,
    fetching,
    entrance,
    entrances,
    showModalDetails,
    handleSelectNotice,
    handleCloseDetail,
  };
};
