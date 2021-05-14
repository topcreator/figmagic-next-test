import styled from 'styled-components';
import { Layout} from 'antd';
import colors from '@tokens/colors';
import fontSizes from '@tokens/fontSizes';
// import spacing from '@tokens/spacing';

const { Sider } = Layout;

const SidebarStyled = styled(Sider)`
  background-color: ${colors.sidebarBg};
  .ant-menu {
    background-color: ${colors.sidebarBg};
  }
  .ant-menu-item-text {
    font-size: ${fontSizes.size16};
  }
`;

export default SidebarStyled;