export type Geo = {
  lat: string;
  lng: string;
};

export type Adrress = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
};

export type Company = {
  name: string;
  bs: string;
  catchPhrase: string;
};

export type User = {
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
  email: string;
  address: Adrress;
  company: Company;
};
