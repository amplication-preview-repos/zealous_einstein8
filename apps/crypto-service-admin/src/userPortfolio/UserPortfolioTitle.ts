import { UserPortfolio as TUserPortfolio } from "../api/userPortfolio/UserPortfolio";

export const USERPORTFOLIO_TITLE_FIELD = "id";

export const UserPortfolioTitle = (record: TUserPortfolio): string => {
  return record.id?.toString() || String(record.id);
};
