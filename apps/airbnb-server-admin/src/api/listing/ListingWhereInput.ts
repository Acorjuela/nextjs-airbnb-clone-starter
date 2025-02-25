import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { TripListRelationFilter } from "../trip/TripListRelationFilter";
import { WishlistListRelationFilter } from "../wishlist/WishlistListRelationFilter";

export type ListingWhereInput = {
  description?: StringFilter;
  id?: StringFilter;
  listingCreatedBy?: UserListRelationFilter;
  locationData?: JsonFilter;
  locationType?: StringFilter;
  mapData?: JsonFilter;
  photos?: JsonFilter;
  placeAmenetices?: JsonFilter;
  placeSpace?: JsonFilter;
  placeType?: StringFilter;
  price?: FloatFilter;
  title?: StringFilter;
  trips?: TripListRelationFilter;
  wishlists?: WishlistListRelationFilter;
};
