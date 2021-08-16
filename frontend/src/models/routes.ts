import { ConnectedComponent } from "react-redux";
import { Route } from "react-router-dom";

export interface ILayoutProps {
  type: string,
  children: React.ReactNode,
}

export interface IRouteObj {
  path: string,
  name: string,
  component: React.LazyExoticComponent<ConnectedComponent<React.MemoExoticComponent<() => JSX.Element>, Omit<unknown, never>>>,
  exact: boolean,
  route: typeof Route,
  roles?: string[],
}

export interface IPrivateRouteProps extends IRouteObj {

}