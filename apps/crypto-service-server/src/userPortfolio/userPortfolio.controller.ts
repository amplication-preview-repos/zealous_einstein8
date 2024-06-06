import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserPortfolioService } from "./userPortfolio.service";
import { UserPortfolioControllerBase } from "./base/userPortfolio.controller.base";

@swagger.ApiTags("userPortfolios")
@common.Controller("userPortfolios")
export class UserPortfolioController extends UserPortfolioControllerBase {
  constructor(protected readonly service: UserPortfolioService) {
    super(service);
  }
}
