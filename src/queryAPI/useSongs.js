import { useQuery } from "@tanstack/react-query";
import { getSongs } from "../api/songsAPI";

export function useSongs() {
  const {
    isPending,
    data: songs,
    error,
  } = useQuery({
    queryKey: ["songs"],
    queryFn: getSongs,
  });
  return { isPending, error, songs };
}
