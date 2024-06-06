import { CryptoAssetWhereInput } from "./CryptoAssetWhereInput";
import { CryptoAssetOrderByInput } from "./CryptoAssetOrderByInput";

export type CryptoAssetFindManyArgs = {
  where?: CryptoAssetWhereInput;
  orderBy?: Array<CryptoAssetOrderByInput>;
  skip?: number;
  take?: number;
};
