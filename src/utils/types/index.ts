export type EventsData = {
  [category: string]: {
    banner: {
      heading: string;
      image: string;
    };
  };
};

export type ReviewTableData = {
  CustomerImg: string;
  CustomerName: string;
  CustomerID: string;
  Date: string;
  MovieName: string;
  Review: string;
}[];

export type UserType = {
  accessToken: string;
  userType: string;
  id: string;
  name: string;
  email: string;
  profileImageURL: string | null;
};
