import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CryptoAssetService } from "./cryptoAsset.service";
import { CryptoAssetControllerBase } from "./base/cryptoAsset.controller.base";

@swagger.ApiTags("cryptoAssets")
@common.Controller("cryptoAssets")
export class CryptoAssetController extends CryptoAssetControllerBase {
  constructor(protected readonly service: CryptoAssetService) {
    super(service);
  }
}
