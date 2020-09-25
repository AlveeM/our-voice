import React, { useState, useEffect } from 'react';

import SenateContainer from './SenateContainer';

import Container from '@material-ui/core/Container';

export default function CongressContainer() {
  return (
    <Container maxWidth="lg">
      <SenateContainer />
    </Container>
  )
}