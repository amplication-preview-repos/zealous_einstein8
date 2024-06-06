/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, MarketData as PrismaMarketData } from "@prisma/client";

export class MarketDataServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.MarketDataCountArgs, "select">
  ): Promise<number> {
    return this.prisma.marketData.count(args);
  }

  async marketDataItems<T extends Prisma.MarketDataFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.MarketDataFindManyArgs>
  ): Promise<PrismaMarketData[]> {
    return this.prisma.marketData.findMany<Prisma.MarketDataFindManyArgs>(args);
  }
  async marketData<T extends Prisma.MarketDataFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.MarketDataFindUniqueArgs>
  ): Promise<PrismaMarketData | null> {
    return this.prisma.marketData.findUnique(args);
  }
  async createMarketData<T extends Prisma.MarketDataCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MarketDataCreateArgs>
  ): Promise<PrismaMarketData> {
    return this.prisma.marketData.create<T>(args);
  }
  async updateMarketData<T extends Prisma.MarketDataUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MarketDataUpdateArgs>
  ): Promise<PrismaMarketData> {
    return this.prisma.marketData.update<T>(args);
  }
  async deleteMarketData<T extends Prisma.MarketDataDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.MarketDataDeleteArgs>
  ): Promise<PrismaMarketData> {
    return this.prisma.marketData.delete(args);
  }
}
