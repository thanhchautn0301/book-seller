import { useState } from 'react';
// @mui
import { styled } from '@mui/material/styles';
//
import Header from './header';
import Nav from './nav';

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const StyledRoot = styled('div')({
  display: 'flex',
  minHeight: '100%',
  overflow: 'hidden',
});

const Main = styled('div')(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%',
  paddingTop: APP_BAR_MOBILE + 24,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('lg')]: {
    paddingTop: APP_BAR_DESKTOP + 24,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

// ----------------------------------------------------------------------

export default function DashboardLayout(props) {
  const {children,user} = props;
  const [open, setOpen] = useState(false);
  return (
    <StyledRoot>
      <Header  user={user} onOpenNav={() => setOpen(true)} />

      <Nav  user={user} openNav={open} onCloseNav={() => setOpen(false)} />
      <Main>
      <main>
        {children}
      </main>
      </Main>
    </StyledRoot>
  );
}
