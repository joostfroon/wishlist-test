import styled from 'styled-components';

export default styled.div`
  margin: 0 auto;

  padding-left: ${({ theme }) => theme.grid.containerGap};
  padding-right: ${({ theme }) => theme.grid.containerGap};

  @media all and (min-width: ${({ theme }) => theme.breakingpoints.sm}) {
    max-width: ${({ theme }) => theme.breakingpoints.sm};
  }

  @media all and (min-width: ${({ theme }) => theme.breakingpoints.md}) {
    max-width: ${({ theme }) => theme.breakingpoints.md};
  }

  @media all and (min-width: ${({ theme }) => theme.breakingpoints.lg}) {
    max-width: ${({ theme }) => theme.breakingpoints.lg};
  }

  @media all and (min-width: ${({ theme }) => theme.breakingpoints.xl}) {
    max-width: ${({ theme }) => theme.breakingpoints.xl};
  }
`;
