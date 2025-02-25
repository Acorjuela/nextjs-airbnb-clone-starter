import { UserUpdateManyWithoutListingsInput } from "./UserUpdateManyWithoutListingsInput";
import { InputJsonValue } from "../../types";
import { TripUpdateManyWithoutListingsInput } from "./TripUpdateManyWithoutListingsInput";
import { WishlistUpdateManyWithoutListingsInput } from "./WishlistUpdateManyWithoutListingsInput";

export type ListingUpdateInput = {
  description?: string;
  listingCreatedBy?: UserUpdateManyWithoutListingsInput;
  locationData?: InputJsonValue;
  locationType?: string;
  mapData?: InputJsonValue;
  photos?: InputJsonValue;
  placeAmenetices?: InputJsonValue;
  placeSpace?: InputJsonValue;
  placeType?: string;
  price?: number;
  title?: string;
  trips?: TripUpdateManyWithoutListingsInput;
  wishlists?: WishlistUpdateManyWithoutListingsInput;
};
