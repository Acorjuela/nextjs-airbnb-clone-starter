import * as graphql from "@nestjs/graphql";
import { TripResolverBase } from "./base/trip.resolver.base";
import { Trip } from "./base/Trip";
import { TripService } from "./trip.service";

@graphql.Resolver(() => Trip)
export class TripResolver extends TripResolverBase {
  constructor(protected readonly service: TripService) {
    super(service);
  }
}
