import * as SiteTypes from './siteCoordinator.types';

const INITIAL_STATE = {
    sidebarOpen: false,
    loading: false
};

const siteCoordinatorReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
        case SiteTypes.TOGGLE_SIDEBAR:
            return {
                ...state,
                sidebarOpen: payload,
            };

        case SiteTypes.CLOSE_SIDEBAR:
            return {
                ...state,
                sidebarOpen: false,
            };

        default:
            return state;
    }
};

export default siteCoordinatorReducer;
