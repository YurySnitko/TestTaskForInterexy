import axios from "axios";
import { useEffect, useState } from "react";
import { CharacterResponseData } from "../components/HomePage/HomePage.types";

const useCharactersData = (url: string) => {
  const [charactersData, setCharactersData] = useState<CharacterResponseData>();
  const [error, setError] = useState<unknown>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    (async function () {
      try {
        setIsLoading(true);
        const response = await axios.get(url);
        setCharactersData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [url]);

  return { charactersData, error, isLoading };
};

export default useCharactersData;
