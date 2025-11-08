interface PropertyProps{
     name: string;
    address: {
      state: string;
      city: string;
      country: string;
    };
    rating: number;
    category: any;
    price: number;
    offers: {
      bed: string;
      shower: string;
      occupants: string;
    };
    image: string;
    discount?: string
}