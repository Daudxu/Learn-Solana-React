import * as bip39 from "bip39";
import { useState } from "react";
import { PublicKey } from "@solana/web3.js";

function Test() {
    const [mnemonic, setMnemonic ] = useState();
   const handleClick = () => {
        setMnemonic(bip39.generateMnemonic())
   }

   const handleClickCheckPublicKey = () => {
        const key = new PublicKey("HrJ27zbSXPWvMHaFkVTb4GpS9qfAc2SfQUAKwrrUPQpV");
        console.log(PublicKey.isOnCurve(key.toBytes()));
   }

   return (
    <div> 
        <h2>test</h2>
        <p> {mnemonic ? mnemonic : ""} </p> 
        <div>
            <button onClick={() => handleClick()}> 生成助记词 </button>
        </div>
        <div>
            <button onClick={() => handleClickCheckPublicKey()}> 验证公钥 </button>
        </div>
    </div>
   )
} 

export default Test;