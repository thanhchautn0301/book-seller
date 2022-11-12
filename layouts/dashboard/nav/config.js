// ----------------------------------------------------------------------

import SvgColor from "../../../components/svg-color";

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'Home',
    path: '/admin',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Book',
    path: '/admin/book',
    icon: icon('ic_user'),
  },
  {
    title: 'Author',
    path: '/admin/author',
    icon: icon('ic_user'),
  },
  {
    title: 'Topic',
    path: '/admin/topic',
    icon: icon('ic_cart'),
  },
  {
    title: 'Invoice',
    path: '/admin/invoice',
    icon: icon('ic_user'),
  },
  {
    title: 'Chat',
    path: '/admin/chat',
    icon: icon('ic_cart'),
  },
];

export default navConfig;
