import React from 'react';
import styled from 'styled-components';

interface Props {
  className?: string;
}

const Logo = ({ className }: Props) => (
  <span className={className}>{`<WishlistTest />`}</span>
);

export default styled(Logo)``;
