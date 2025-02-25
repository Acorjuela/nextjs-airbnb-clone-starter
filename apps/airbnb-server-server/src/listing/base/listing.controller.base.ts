/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ListingService } from "../listing.service";
import { ListingCreateInput } from "./ListingCreateInput";
import { Listing } from "./Listing";
import { ListingFindManyArgs } from "./ListingFindManyArgs";
import { ListingWhereUniqueInput } from "./ListingWhereUniqueInput";
import { ListingUpdateInput } from "./ListingUpdateInput";
import { UserFindManyArgs } from "../../user/base/UserFindManyArgs";
import { User } from "../../user/base/User";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { TripFindManyArgs } from "../../trip/base/TripFindManyArgs";
import { Trip } from "../../trip/base/Trip";
import { TripWhereUniqueInput } from "../../trip/base/TripWhereUniqueInput";
import { WishlistFindManyArgs } from "../../wishlist/base/WishlistFindManyArgs";
import { Wishlist } from "../../wishlist/base/Wishlist";
import { WishlistWhereUniqueInput } from "../../wishlist/base/WishlistWhereUniqueInput";

export class ListingControllerBase {
  constructor(protected readonly service: ListingService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Listing })
  async createListing(
    @common.Body() data: ListingCreateInput
  ): Promise<Listing> {
    return await this.service.createListing({
      data: data,
      select: {
        createdAt: true,
        description: true,
        id: true,
        locationData: true,
        locationType: true,
        mapData: true,
        photos: true,
        placeAmenetices: true,
        placeSpace: true,
        placeType: true,
        price: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Listing] })
  @ApiNestedQuery(ListingFindManyArgs)
  async listings(@common.Req() request: Request): Promise<Listing[]> {
    const args = plainToClass(ListingFindManyArgs, request.query);
    return this.service.listings({
      ...args,
      select: {
        createdAt: true,
        description: true,
        id: true,
        locationData: true,
        locationType: true,
        mapData: true,
        photos: true,
        placeAmenetices: true,
        placeSpace: true,
        placeType: true,
        price: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Listing })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async listing(
    @common.Param() params: ListingWhereUniqueInput
  ): Promise<Listing | null> {
    const result = await this.service.listing({
      where: params,
      select: {
        createdAt: true,
        description: true,
        id: true,
        locationData: true,
        locationType: true,
        mapData: true,
        photos: true,
        placeAmenetices: true,
        placeSpace: true,
        placeType: true,
        price: true,
        title: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Listing })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateListing(
    @common.Param() params: ListingWhereUniqueInput,
    @common.Body() data: ListingUpdateInput
  ): Promise<Listing | null> {
    try {
      return await this.service.updateListing({
        where: params,
        data: data,
        select: {
          createdAt: true,
          description: true,
          id: true,
          locationData: true,
          locationType: true,
          mapData: true,
          photos: true,
          placeAmenetices: true,
          placeSpace: true,
          placeType: true,
          price: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Listing })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteListing(
    @common.Param() params: ListingWhereUniqueInput
  ): Promise<Listing | null> {
    try {
      return await this.service.deleteListing({
        where: params,
        select: {
          createdAt: true,
          description: true,
          id: true,
          locationData: true,
          locationType: true,
          mapData: true,
          photos: true,
          placeAmenetices: true,
          placeSpace: true,
          placeType: true,
          price: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/listingCreatedBy")
  @ApiNestedQuery(UserFindManyArgs)
  async findListingCreatedBy(
    @common.Req() request: Request,
    @common.Param() params: ListingWhereUniqueInput
  ): Promise<User[]> {
    const query = plainToClass(UserFindManyArgs, request.query);
    const results = await this.service.findListingCreatedBy(params.id, {
      ...query,
      select: {
        createdAt: true,
        email: true,
        firstName: true,
        id: true,
        lastName: true,

        listings: {
          select: {
            id: true,
          },
        },

        roles: true,
        updatedAt: true,
        username: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/listingCreatedBy")
  async connectListingCreatedBy(
    @common.Param() params: ListingWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      listingCreatedBy: {
        connect: body,
      },
    };
    await this.service.updateListing({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/listingCreatedBy")
  async updateListingCreatedBy(
    @common.Param() params: ListingWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      listingCreatedBy: {
        set: body,
      },
    };
    await this.service.updateListing({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/listingCreatedBy")
  async disconnectListingCreatedBy(
    @common.Param() params: ListingWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      listingCreatedBy: {
        disconnect: body,
      },
    };
    await this.service.updateListing({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/trips")
  @ApiNestedQuery(TripFindManyArgs)
  async findTrips(
    @common.Req() request: Request,
    @common.Param() params: ListingWhereUniqueInput
  ): Promise<Trip[]> {
    const query = plainToClass(TripFindManyArgs, request.query);
    const results = await this.service.findTrips(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,

        listing: {
          select: {
            id: true,
          },
        },

        tripInfo: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/trips")
  async connectTrips(
    @common.Param() params: ListingWhereUniqueInput,
    @common.Body() body: TripWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      trips: {
        connect: body,
      },
    };
    await this.service.updateListing({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/trips")
  async updateTrips(
    @common.Param() params: ListingWhereUniqueInput,
    @common.Body() body: TripWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      trips: {
        set: body,
      },
    };
    await this.service.updateListing({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/trips")
  async disconnectTrips(
    @common.Param() params: ListingWhereUniqueInput,
    @common.Body() body: TripWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      trips: {
        disconnect: body,
      },
    };
    await this.service.updateListing({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/wishlists")
  @ApiNestedQuery(WishlistFindManyArgs)
  async findWishlists(
    @common.Req() request: Request,
    @common.Param() params: ListingWhereUniqueInput
  ): Promise<Wishlist[]> {
    const query = plainToClass(WishlistFindManyArgs, request.query);
    const results = await this.service.findWishlists(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,

        listing: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/wishlists")
  async connectWishlists(
    @common.Param() params: ListingWhereUniqueInput,
    @common.Body() body: WishlistWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      wishlists: {
        connect: body,
      },
    };
    await this.service.updateListing({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/wishlists")
  async updateWishlists(
    @common.Param() params: ListingWhereUniqueInput,
    @common.Body() body: WishlistWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      wishlists: {
        set: body,
      },
    };
    await this.service.updateListing({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/wishlists")
  async disconnectWishlists(
    @common.Param() params: ListingWhereUniqueInput,
    @common.Body() body: WishlistWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      wishlists: {
        disconnect: body,
      },
    };
    await this.service.updateListing({
      where: params,
      data,
      select: { id: true },
    });
  }
}
