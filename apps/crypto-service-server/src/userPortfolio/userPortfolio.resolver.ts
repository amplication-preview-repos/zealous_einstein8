import * as graphql from "@nestjs/graphql";
import { UserPortfolioResolverBase } from "./base/userPortfolio.resolver.base";
import { UserPortfolio } from "./base/UserPortfolio";
import { UserPortfolioService } from "./userPortfolio.service";

@graphql.Resolver(() => UserPortfolio)
export class UserPortfolioResolver extends UserPortfolioResolverBase {
  constructor(protected readonly service: UserPortfolioService) {
    super(service);
  }
}
