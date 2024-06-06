import { Module } from "@nestjs/common";
import { CryptoAssetModuleBase } from "./base/cryptoAsset.module.base";
import { CryptoAssetService } from "./cryptoAsset.service";
import { CryptoAssetController } from "./cryptoAsset.controller";
import { CryptoAssetResolver } from "./cryptoAsset.resolver";

@Module({
  imports: [CryptoAssetModuleBase],
  controllers: [CryptoAssetController],
  providers: [CryptoAssetService, CryptoAssetResolver],
  exports: [CryptoAssetService],
})
export class CryptoAssetModule {}
