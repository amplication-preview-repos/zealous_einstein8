import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserPortfolioServiceBase } from "./base/userPortfolio.service.base";

@Injectable()
export class UserPortfolioService extends UserPortfolioServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
