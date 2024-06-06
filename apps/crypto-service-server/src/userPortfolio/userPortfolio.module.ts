import { Module } from "@nestjs/common";
import { UserPortfolioModuleBase } from "./base/userPortfolio.module.base";
import { UserPortfolioService } from "./userPortfolio.service";
import { UserPortfolioController } from "./userPortfolio.controller";
import { UserPortfolioResolver } from "./userPortfolio.resolver";

@Module({
  imports: [UserPortfolioModuleBase],
  controllers: [UserPortfolioController],
  providers: [UserPortfolioService, UserPortfolioResolver],
  exports: [UserPortfolioService],
})
export class UserPortfolioModule {}
