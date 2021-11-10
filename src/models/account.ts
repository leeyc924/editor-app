export interface ILoginState {
  accountId: string;
  accountPw: string;
  isSaveAccountId: boolean;
}

export interface ISignupState extends ILoginState {
  accountNm: string;
}

export interface IAccount {
  accountId: string;
  accountPw: string;
  accountNm: string;
  lastLoginDt: string;
  pwChangeDt: string;
  useYn: 'Y' | 'N';
  modDt: string;
  regDt: string;
  delYn: 'Y' | 'N';
  delDt: string;
  permission: 'USER' | 'ADMIN';
}

export interface IAccountSliceState {
  isLogin: boolean;
  accountInfo: IAccount | {};
}


export interface ILoginReqData {
  accountId: string;
  accountPw: string;
}

export interface ISignupReqData extends ILoginReqData {
  accountNm: string;
}

export interface ILoginResDeta {
  accessToken: string;
  accountInfo: IAccount;
}
