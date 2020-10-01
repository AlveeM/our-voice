import React from 'react'

import { useHistory, Redirect } from 'react-router-dom';

export default function SignOut() {
  const history = useHistory();
  localStorage.clear()

  return (
    <Redirect push to="/" />
  )
}
