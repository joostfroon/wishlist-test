import styled, { css } from 'styled-components';

const Stars = styled.div`
  --percent: ${({ $score }) => css`calc(${$score} / 10 * 100%)`};

  display: block;
  font-size: 1.25rem;
  font-family: Times;
  line-height: 1;
  margin-right: 0;
  margin-bottom: .75rem;

  &::before {
    content: '★★★★★';
    letter-spacing: 0.188rem;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.primaryColor} var(--percent),
      ${({ theme }) => theme.gray} var(--percent)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export default Stars;

