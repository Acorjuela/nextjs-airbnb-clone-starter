import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TripService } from "./trip.service";
import { TripControllerBase } from "./base/trip.controller.base";

@swagger.ApiTags("trips")
@common.Controller("trips")
export class TripController extends TripControllerBase {
  constructor(protected readonly service: TripService) {
    super(service);
  }
}
