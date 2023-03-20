// #region Global Imports
import { WithTranslation } from "next-i18next";
// #endregion Global Imports

declare namespace IRegister {
    export interface IProps extends WithTranslation {}

    export interface InitialProps {
        namespacesRequired: string[];
    }

    export interface IStateProps {
        register: {
            version: number;
        };
        image: {
            url: string;
        };
    }

    namespace Actions {
        export interface IMapPayload {}

        export interface IMapResponse {}

        export interface IGetApodPayload extends PlanetaryModel.GetApodPayload {
            params: {};
        }

        export interface IGetApodResponse
            extends PlanetaryModel.GetApodResponse {}
    }
}

export { IRegister };
