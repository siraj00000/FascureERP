import { PERMISSION_LIST as modules } from "../../../utils/permissions";

const initialModulesList = modules.map((module) => ({
    ...module,
    create: { ...module.create, checked: false },
    view: { ...module.view, checked: false },
    edit: { ...module.edit, checked: false },
    delete: { ...module.delete, checked: false },
}));

export const initialState = {
    modulesList: initialModulesList,
    permissions: [],
};

export const roleReducer = (state, action) => {
    switch (action.type) {
        case "UPDATE_MODULE_CHECKBOX":
            const moduleIndex = state.modulesList.findIndex(
                (module) => module.name === action.payload.moduleName.name
            );
            const updatedModulesList = [...state.modulesList];
            updatedModulesList[moduleIndex][action.payload.permissionType].checked =
                action.payload.checked;
            const updatedPermissions = getUpdatedPermissions(
                updatedModulesList,
                action.payload.moduleName,
                action.payload.permissionType,
                action.payload.checked,
                state.permissions
            );
            return {
                ...state,
                modulesList: updatedModulesList,
                permissions: updatedPermissions,
            };
        case "UPDATE_ALL_CHECKBOX":
            const updatedAllModulesList = state.modulesList.map((module) => {
                return {
                    ...module,
                    [action.payload.permissionType]: {
                        ...module[action.payload.permissionType],
                        checked: action.payload.checked,
                    },
                };
            });
            const updatedAllPermissions = getUpdatedAllPermissions(
                updatedAllModulesList,
                action.payload.permissionType,
                action.payload.checked
            );
            return {
                ...state,
                modulesList: updatedAllModulesList,
                permissions: updatedAllPermissions,
            };
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
};

const getUpdatedPermissions = (
    updatedModulesList,
    moduleName,
    permissionType,
    checked,
    permissions
) => {
    if (checked) {
        const permission = moduleName[permissionType].attribute;
        if (!permissions.includes(permission)) {
            return [...permissions, permission];
        }
    } else {
        const permission = moduleName[permissionType].attribute;
        return permissions.filter((p) => p !== permission);
    }
    return permissions;
};

const getUpdatedAllPermissions = (
    updatedModulesList,
    permissionType,
    checked
) => {
    let updatedPermissions = [];
    updatedModulesList.forEach((module) => {
        const permission = module[permissionType].attribute;
        if (checked && !updatedPermissions.includes(permission)) {
            updatedPermissions.push(permission);
        }
        if (!checked) {
            updatedPermissions = updatedPermissions.filter((p) => p !== permission);
        }
    });
    return updatedPermissions;
};