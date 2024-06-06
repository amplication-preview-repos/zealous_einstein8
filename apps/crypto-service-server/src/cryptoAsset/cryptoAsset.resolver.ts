import * as graphql from "@nestjs/graphql";
import { CryptoAssetResolverBase } from "./base/cryptoAsset.resolver.base";
import { CryptoAsset } from "./base/CryptoAsset";
import { CryptoAssetService } from "./cryptoAsset.service";

@graphql.Resolver(() => CryptoAsset)
export class CryptoAssetResolver extends CryptoAssetResolverBase {
  constructor(protected readonly service: CryptoAssetService) {
    super(service);
  }
}
