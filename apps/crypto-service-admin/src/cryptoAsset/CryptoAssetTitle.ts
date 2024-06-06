import { CryptoAsset as TCryptoAsset } from "../api/cryptoAsset/CryptoAsset";

export const CRYPTOASSET_TITLE_FIELD = "id";

export const CryptoAssetTitle = (record: TCryptoAsset): string => {
  return record.id?.toString() || String(record.id);
};
