import styled from 'styled-components';
import spacing from '@tokens/spacing';
import colors from '@tokens/colors';
import fontSizes from '@tokens/fontSizes';
import fontWeights from '@tokens/fontWeights';

const ListCardStyled = styled.div`
  width: 600px;
  background: ${colors.grayscaleWhite};
  .list-card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${spacing.small} ${spacing.medium};
    background: ${colors.grayscaleGrayLightest};
    font-size: ${fontSizes.size19};
    font-weight: ${fontWeights.bold};
    color: ${colors.grayscaleBlack};
  }
  .list-card-content {
    padding: ${spacing.medium} ${spacing.large};
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: ${spacing.small} ${spacing.large};
    .category-label, .category-value {
      font-size: ${fontSizes.size19};
      font-weight: ${fontWeights.bold};
      color: ${colors.grayscaleBlack};
      margin: ${spacing.small} 0;
    }
    .item-label, .item-value {
      font-size: ${fontSizes.size19};
      font-weight: ${fontWeights.bold};
      color: ${colors.grayscaleGrayDark};
    }
    .item-label {
      text-align: right;
    }
    .double-dot {
      margin-right: ${spacing.medium};
    }
  }
  .list-card-footer {
    padding: ${spacing.medium};
    text-align: right;
    color: ${colors.accentDefault};
  }
`;

export default ListCardStyled;
