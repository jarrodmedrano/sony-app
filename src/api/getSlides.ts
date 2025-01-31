import { useQuery } from "@tanstack/react-query";

const fetchSlides = async () => {
  const response = await fetch("../../public/slides.json");
  if (!response.ok) {
    throw new Error("Failed to fetch slides");
  }
  const data = await response.json();
  return data;
};

export const useGetSlides = () => {
  return useQuery({
    queryKey: ["slides"],
    queryFn: fetchSlides,
    enabled: true,
  });
};
