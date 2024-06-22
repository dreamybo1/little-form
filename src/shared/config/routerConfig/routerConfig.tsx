import { PayPage } from 'pages/PayPage';
import { RouteProps } from 'react-router-dom';

export enum AppRoutes {
    PAY = 'pay',
}

export const RoutePaths: Record<AppRoutes, string> = {
    [AppRoutes.PAY]: '/',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.PAY]: {
        path: RoutePaths.pay,
        element: <PayPage />,
    },

};
