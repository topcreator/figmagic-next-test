import styled from 'styled-components';
import { Layout} from 'antd';
import colors from '@tokens/colors';
import fontSizes from '@tokens/fontSizes';
import fontFamilies from '@tokens/fontFamilies';
import spacing from '@tokens/spacing';

const { Sider } = Layout;

const SidebarStyled = styled(Sider)`
  background-color: ${colors.sidebarBg};
  .ant-menu {
    background-color: ${colors.sidebarBg};
    font-family: ${fontFamilies.regular};
  }
  .ant-menu-item {
    margin: ${spacing.small} 0 !important;
    padding: 0 ${spacing.mediumSmall} !important;
    .anticon {
      font-size: ${fontSizes.size19} !important;
      svg path {
        fill: ${colors.grayscaleGrayLight};
      }
      svg g {
        fill: ${colors.grayscaleGrayLight};
        stroke: ${colors.grayscaleGrayLight};
      }
    }
    &.ant-menu-item-selected, &:hover {
      svg path {
        fill: ${colors.grayscaleWhite};
      }
      svg g {
        fill: ${colors.grayscaleWhite};
        stroke: ${colors.grayscaleWhite};
      }
    }
  }
  .ant-menu-item-text {
    font-size: ${fontSizes.size16};
  }
`;

export default SidebarStyled;
