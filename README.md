
## Installation

- Run `yarn` inside of the repository to install all dependencies
- Passing in API token and URL through the CLI, like this figmagic --token {TOKEN} --url {URL} (substitute curly braces for your actual values in .env)
- Start the project by running `yarn dev` on local
- To sync tokens, run `yarn figmagic:tokens`
- To sync graphics, run `yarn figmagic:graphics`
- To sync elements, run `yarn figmagic:elements`
- To sync all of it, run `yarn figmagic:sync`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## How to use tokens and graphics from Figmagic

- use tokens with styled-components
```
import colors from '@tokens/colors';

...

const SidebarStyled = styled(Sider)`
  background-color: ${colors.sidebarBg};
  .ant-menu {
    background-color: ${colors.sidebarBg};
  }
`;

...

```
- use graphics(svg icons) as resources
```
import YoutubeIcon from '@graphics/youtube1.svg';
```

## Learn More

To learn more about Next.js and Figmagic, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Figma developer site](https://www.figma.com/developers/docs) - learn about Figma and API.
- [Figmaic Documentation](https://github.com/mikaelvesavuori/figmagic) - learn about Figmaic.


## Deploy on heroku

Open [https://figmagic-next.herokuapp.com](https://figmagic-next.herokuapp.com) with your browser to see the result.
