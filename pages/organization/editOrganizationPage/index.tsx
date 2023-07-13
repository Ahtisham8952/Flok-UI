import { OrganizationTemplateEdit } from '../../../src/components/app/Flok/OrganizationComponent/OrganizationTemplateEdit';
import { userRoles } from '../../../src/utils/enums';

const EditPageORG = () => {
  return <OrganizationTemplateEdit />;
};

EditPageORG.auth = {
  role: [userRoles.PROVIDER],
  redirectPath: '/login',
};
export default EditPageORG;
