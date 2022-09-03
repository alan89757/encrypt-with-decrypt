import JSEncrypt from 'jsencrypt/bin/jsencrypt';

const _publicKey = `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC3F/Hv0Pz8eWcCfwhSBD0jryGO
VmjLeUtwaa/nzQ65BHrb56yyfGPQBDBWDrb+VC8kycLIGF4aDSZiwh6iWyPFM0ai
x+hqbWa5MS/aWMFPZqbdXsH/aB4Q6dHX+mwrQlHHy1rrV92aQni/z30teFYfGMf+
GEEEAB/CZ05gKz37ewIDAQAB
-----END PUBLIC KEY-----
`;

export function encrypt(txt) {
  const encrypt = new JSEncrypt();
  encrypt.setPublicKey(_publicKey);
  const res = encrypt.encrypt(txt);
  return res;
}
