import React from 'react';
import wallet from '../../../../assets/images/tablet/1x/wallet30x30.svg';
import {
  HeaderC,
  LogoCont,
  Logo,
  LogoText,
  BtnLogout,
  LogoutCont,
  LogoutExitName,
  LogoutExit,
  Avatar,
} from '../HeaderContent/HeaderComponent';
import LogoutIcon from '@mui/icons-material/Logout';
// import { useSelector } from 'react-redux';
import Media from 'react-media';

export const HeaderContent = ({ toExit }) => {
  //   const nameAll = useSelector(store => store.user.user.name);
  //   const avatar = useSelector(store => store.user.user.avatar);
  return (
    <>
      <HeaderC>
        <LogoCont to="/">
          <Logo src={wallet} alt="logo" />
          <LogoText>Wallet</LogoText>
        </LogoCont>
        <LogoutCont>
          <Media
            queries={{
              medium: '(min-width: 768px)',
            }}
          >
            {matches => (
              <>
                {matches.medium && (
                  <Avatar>{/* <img src={avatar} alt="Avatar" /> */}</Avatar>
                )}
              </>
            )}
          </Media>

          <LogoutExitName>{'nameAll'}</LogoutExitName>
          <BtnLogout onClick={toExit} type="btn">
            <LogoutIcon
              sx={{
                color: '#BDBDBD',
              }}
              // src={logout} alt="logout"
            />
            <LogoutExit>Exit</LogoutExit>
          </BtnLogout>
        </LogoutCont>
      </HeaderC>
    </>
  );
};
