import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CryptoAssetServiceBase } from "./base/cryptoAsset.service.base";

@Injectable()
export class CryptoAssetService extends CryptoAssetServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
