// #region Interface Imports
import { IHomePage } from "@Interfaces";
// #endregion Interface Imports

export interface IStore {
    home: IHomePage.IStateProps;
    /* Add_Page_IStore_Here */
chatroom: IChatroom.IStateProps;
    register: IRegister.IStateProps;
    login: ILogin.IStateProps;
}
