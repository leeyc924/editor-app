import React, { FC } from 'react';
// import { userApi } from '../../../../api/github/user/api';
// import { RootState, useTypedSelector } from '../../../../shared/redux/store';
// import { useAuthUser } from '../../hooks/useAuthUser';

const Token: FC = ({ children }) => {
  // const accessToken = useTypedSelector((state: RootState) => state.authSlice.accessToken);
  // const user = useAuthUser();

  // userApi.endpoints.getUser.useQuery(null, {
  //   skip: !accessToken
  // });

  // if (!user && accessToken) {
  //   return (
  //     <FullscreenProgress />
  //   )
  // }

  return children as React.ReactElement;
}

export default Token;
