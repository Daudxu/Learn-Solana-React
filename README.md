Learn-Solana-React

### 创建TOKEN
```$ spl-token create-token --decimals 6```

结果

Creating token 75Wauzn3imrfSNDRMKisPzDqZpwzR5rPdDXDMUvqnDGM

Address:  75Wauzn3imrfSNDRMKisPzDqZpwzR5rPdDXDMUvqnDGM
Decimals:  6
 
Signature: 3bTFB971Ak7yDbPYgvcBbx6qp61irZZTwe7ZVLegHKSvwAJ2QyRQYxZKv62Mn7DNLyJQxPePnSn6uFS2rpu993Kr
 
```$ spl-token create-account 75Wauzn3imrfSNDRMKisPzDqZpwzR5rPdDXDMUvqnDGM```

Creating account AaNHMM2vxq7jmzzhuYPtNyNf6YuDSVwE6p72CMojC49B

Signature: 3TYYi1fRdikR9UbeLzhWeCfu95yfHoW7DpphLFKJV9W5ZTrixj1cUKXpcVT99YaZc8vJQFGvvyyr7Z31EVeZboxn

```$ spl-token mint 75Wauzn3imrfSNDRMKisPzDqZpwzR5rPdDXDMUvqnDGM 7000000 AaNHMM2vxq7jmzzhuYPtNyNf6YuDSVwE6p72CMojC49B```

Minting 7000000 tokens
  Token: 75Wauzn3imrfSNDRMKisPzDqZpwzR5rPdDXDMUvqnDGM
  Recipient: AaNHMM2vxq7jmzzhuYPtNyNf6YuDSVwE6p72CMojC49B

Signature: 2T7UVg7WQrUD2fZ9pZnUST9JnP3iUVVmU5YK3ofsK9WctoNEBw1DozcLy5gRKPvSDFgD7csWHJeyiGHT5Uy8Aa8r

### 创建NFT 
```$ spl-token create-token --decimals 0```

结果
Creating token DUhtV53QwXUwqDaYbPZbhboP6qfEuDoGZxWNhedWiPSj

Address:  DUhtV53QwXUwqDaYbPZbhboP6qfEuDoGZxWNhedWiPSj
Decimals:  0

Signature: MqGRi5XMF7Rc3NaoQY3WBP9t6oUotUt3myM5sjfZgB3TbFF2S75bWQjTYXV9sHzJZYqcVQrY6mHonvqNbmyCjFx

```$ spl-token create-account DUhtV53QwXUwqDaYbPZbhboP6qfEuDoGZxWNhedWiPSj```

结果

Creating account DXMYwY1nsC1gwZbmj96Hb2T1pddD6r5F1s4sNnjtxu7p

Signature: 46GvBYmsMp2f3wuiw11GPNb8VvC3zUZvRLtGhZ8vQGhrvtYvRME1wyo2KsTT3NYcfxaqMp89scf1rY3UcLL5XCVR

```$ spl-token mint DUhtV53QwXUwqDaYbPZbhboP6qfEuDoGZxWNhedWiPSj 1 DXMYwY1nsC1gwZbmj96Hb2T1pddD6r5F1s4sNnjtxu7p```

Minting 1 tokens
  Token: DUhtV53QwXUwqDaYbPZbhboP6qfEuDoGZxWNhedWiPSj
  Recipient: DXMYwY1nsC1gwZbmj96Hb2T1pddD6r5F1s4sNnjtxu7p

Signature: 4rBbMQac9z3EgVLfHRsu53PtekTNZL8ZpcYb5gL4k64Zf6HYSKzgSCwJXeqV3hJ1yfGBTadLXdEzaRQ25mi5LR4X