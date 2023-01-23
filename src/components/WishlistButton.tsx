import React from 'react';
import styled, { css } from 'styled-components';
import Heart from '../svgs/Heart';

interface Props {
  title: string;
  active: boolean;
  onClick: () => void;
}

const WishlistButton = ({ active, onClick, title }: Props) => (
  <Button 
    type="button"
    active={active} 
    onClick={onClick}
    title={title}
    aria-label={title}
  >
    <Heart />
  </Button>
);

const Button = styled.button`
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
  align-self: center;
  justify-self: center;
  padding: .5rem;

  ${({ active }: { active: boolean }) => active && css`
    color: ${({ theme }) => theme.primaryColor};
    border-radius: 5rem;
    box-shadow: inset 0 0 0 2px ${({ theme }) => theme.primaryColor};
  `}

  ${Heart} {
    display: block;
    width: 1.25rem;
  }
`;

export default WishlistButton;
