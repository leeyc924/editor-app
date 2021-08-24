export interface IAccount {
  accountId: String,
  accountEmail: String,
  accountPw: String,
  accountNm: String,
  placeId: String,
  viewPlaceId: String,
  loginType: String,
  lastLoginDt: String,
  pwChangeDt: String,
  imagePath: String,
  imageSize: String,
  useYn: String,
  delYn: String,
  delDt: String,
  regDt: String,
  modDt: String,
}

export interface ILoginResDeta {
  accessToken: string;
  loginInfo: {
    loginId: string;
    accountId: string;
    accountEmail: string;
    accountNm: string;
    imagePath: string;
    imageSize: string;
    placeId: string;
    viewPlaceId: string;
    lastLoginDt: string;
    loginType: string;
  };
}

export interface ILogin {
  accountEmail: string;
  accountPw: string;
}