import { ISidebarData } from '../../../components/SideBar/sidebar.types';

const edgePermissions = (permission: ISidebarData[]): string[] => {
  let result: string[] = [];
  if (!Array.isArray(permission)) return result;
  for (const per of permission) {
    if (per.children.length === 0) result.push(per.id);
    else {
      result = [...result, ...edgePermissions(per.children)];
    }
  }
  return result;
};

export { edgePermissions };
