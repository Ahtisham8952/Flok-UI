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
