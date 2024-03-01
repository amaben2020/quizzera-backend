export const formatSchoolToText = (string) => {
  return string
    .split(" ")
    .slice(0, 3)
    .map((elem) => elem.toUpperCase().split("")[0])
    .join("");
};
