import { UserPortfolioWhereInput } from "./UserPortfolioWhereInput";
import { UserPortfolioOrderByInput } from "./UserPortfolioOrderByInput";

export type UserPortfolioFindManyArgs = {
  where?: UserPortfolioWhereInput;
  orderBy?: Array<UserPortfolioOrderByInput>;
  skip?: number;
  take?: number;
};
