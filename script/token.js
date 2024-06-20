import {
  createMetadataAccountV3,
  updateMetadataAccountV2,
  findMetadataPda,
} from "@metaplex-foundation/mpl-token-metadata";

import * as web3 from "@solana/web3.js";
import {
  createSignerFromKeypair,
  none,
  signerIdentity,
  some,
} from "@metaplex-foundation/umi";
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import {
  fromWeb3JsKeypair,
  fromWeb3JsPublicKey,
} from "@metaplex-foundation/umi-web3js-adapters";

import fs from "fs";

function loadWalletKey(filePath) {
  const keypairString = fs.readFileSync(filePath, "utf8");
  const keypairBuffer = Uint8Array.from(JSON.parse(keypairString));
  return web3.Keypair.fromSecretKey(keypairBuffer);
}

async function main() {
  try {
    console.log("运行中...");
    // 加载钱包
    const myKeypair = loadWalletKey("wallet-keypair.json");
    // 加载新创建的Token地址
    const mint = new web3.PublicKey(
      "75Wauzn3imrfSNDRMKisPzDqZpwzR5rPdDXDMUvqnDGM"
    );
    // 创建连接到Solana开发网络的实例
    const umi = createUmi("https://api.devnet.solana.com");

    // 打印 Umi 对象，检查配置是否正确
    console.log("Umi object:", umi);

    // 签名者对象, 用于后续的区块链交易
    const signer = createSignerFromKeypair(umi, fromWeb3JsKeypair(myKeypair));
    umi.use(signerIdentity(signer, true));

    const ourMetadata = {
      name: "Test Token",
      symbol: "TT",
      uri: "https://white-giant-leopon-927.mypinata.cloud/ipfs/QmXsTEHzUGx3uKBi93cp9NLnPmAKYvnFmyms4VH2bFzFBU",
    };

    const onChainData = {
      ...ourMetadata,
      sellerFeeBasisPoints: 0,
      creators: none(),
      collection: none(),
      uses: none(),
    };

    const accounts = {
      mint: fromWeb3JsPublicKey(mint),
      mintAuthority: signer,
    };

    const data = {
      isMutable: true,
      collectionDetails: null,
      data: onChainData,
    };

    try {
      const txid = await createMetadataAccountV3(umi, {
        ...accounts,
        ...data,
      }).sendAndConfirm(umi);
      console.log("Transaction ID:", txid);
    } catch (error) {
      console.error("Transaction error:", error);
    }
  } catch (error) {
    console.error("main 函数中的错误:", error);

    // 打印更详细的错误信息
    if (error.response) {
      console.error("Response error data:", error.response.data);
    }
  }
}

main();
