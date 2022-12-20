import config from '~/configs';
import Home from '~/pages/publicPages/Home';
import Product from '~/pages/publicPages/Product';
import Blogs from '~/pages/publicPages/Blogs';
import Library from '~/pages/publicPages/Library';
import Introduce from '~/pages/publicPages/Introduce';
import Emax from '~/pages/publicPages/Emax';
import SliderLayout from '~/layouts/SliderLayout';
import Solution from '~/pages/publicPages/Solution/Solution';
import { background3, background5 } from '~/utils/images';
import Catalog from '~/pages/publicPages/Catalog';
import News from '~/pages/publicPages/News';
import Education from '~/pages/publicPages/Education';
import CatalogDetail from '~/pages/publicPages/CatalogDetail';
import DentalEquipment from '~/pages/publicPages/DentalEquipment';
import Clinical from '~/pages/publicPages/Clinical';
import DentistryTools from '~/pages/publicPages/DentistryTools';
import LaboTools from '~/pages/publicPages/LaboTools';
import MaterialLabo from '~/pages/publicPages/MaterialLabo';
import Orthodontic from '~/pages/publicPages/Orthodontic';
import Login from '~/pages/publicPages/Login';
import Admin from '~/pages/privatePages/Admin';
import AdminLayout from '~/layouts/AdminLayout';
import AddCategory from '~/pages/privatePages/AdminCategories/AddCategory';
import EditCategory from '~/pages/privatePages/AdminCategories/EditCategory';

const publicRouter = [
  {
    path: config.routes.home,
    component: Home,
    layout: SliderLayout,
  },
  {
    path: config.routes.product,
    component: Product,
    navCurrent: 'Sản phẩm',
  },
  {
    path: config.routes.blogs,
    component: Blogs,
    navCurrent: 'Blogs',
  },
  {
    path: config.routes.library,
    component: Library,
    navCurrent: 'Thư Diện',
    backgroundImage: background5,
  },
  {
    path: config.routes.contact,
    component: Library,
  },
  {
    path: config.routes.introduce,
    component: Introduce,
  },

  {
    path: config.routes.emax,
    component: Emax,
  },
  {
    path: config.routes.solution,
    component: Solution,
    navCurrent: 'Giải pháp',
    backgroundImage: background3,
  },
  {
    path: config.routes.catalog,
    component: Catalog,
    navCurrent: 'Catalog',
    backgroundImage: background3,
  },
  {
    path: config.routes.catalogDetail,
    component: CatalogDetail,
    navCurrent: 'Catalog Mới',
    backgroundImage: background3,
  },
  {
    path: config.routes.news,
    component: News,
    navCurrent: 'Tin Tức& Sự kiện',
    backgroundImage: background3,
  },
  {
    path: config.routes.education,
    component: Education,
  },
  {
    path: config.routes.dentalEquipment,
    component: DentalEquipment,
    navCurrent: 'Thiết bị nha khoa',
    backgroundImage: background3,
  },
  {
    path: config.routes.clinical,
    component: Clinical,
    navCurrent: 'Lâm sàng',
    backgroundImage: background3,
  },
  {
    path: config.routes.dentistryTools,
    component: DentistryTools,
    navCurrent: 'Dụng cụ nha khoa',
    backgroundImage: background3,
  },
  {
    path: config.routes.laboTools,
    component: LaboTools,
    navCurrent: 'Thiết bị Labo',
    backgroundImage: background3,
  },
  {
    path: config.routes.materialLabo,
    component: MaterialLabo,
    navCurrent: 'Vật liệu Labo',
    backgroundImage: background3,
  },
  {
    path: config.routes.orthodontic,
    component: Orthodontic,
    navCurrent: 'Vật liệu Labo',
    backgroundImage: background3,
  },
  {
    path: config.routes.login,
    component: Login,
    layout: null,
  },
  {
    path: config.routes.admin,
    component: Admin,
    layout: AdminLayout,
  },
  {
    path: config.routes.AdminCategories,
    component: AddCategory,
    layout: AdminLayout,
  },
  {
    path: config.routes.adminEditCategory,
    component: EditCategory,
    layout: AdminLayout,
  },
];

const privateRouter = [];

export { publicRouter, privateRouter };
