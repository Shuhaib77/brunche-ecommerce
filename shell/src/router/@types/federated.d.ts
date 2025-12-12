// tell TypeScript about the federated module
declare module "auth/App" {
  import { ComponentType } from "react";
  const AuthApp: ComponentType<any>;
  export default AuthApp;
}
