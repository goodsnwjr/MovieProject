import React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';
import { Link } from 'react-router-dom';
import { Menu, Dropdown, Divider, Button } from 'antd';

const { SubMenu } = Menu;

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  background: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  margin-bottom: 15px;
  z-index: 99;
`;

/**
 * Responsive 컴포넌트의 속성에 스타일을 추가해서 새로운 컴포넌트 생성
 */
const Wrapper = styled(Responsive)`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between; /* 자식 엘리먼트 사이의 여백을 최대로 설정 */
  .logo {
    font-size: 1.5rem;
    font-weight: 800;
    letter-spacing: 2px;
    color: red;
  }
  .center {
    display: flex;
    left: 0;
    right: 0;
    margin: 0 auto;
    align-items: center;
    & > a {
      color: black;
      font-size: 1.125rem;
      font-weight: 800;
      padding: 0 15px;
    }
    & > a > a {
      color: black;
    }
  }
`;

const UserInfo = styled.div`
  font-weight: 800;
  margin-right: 1rem;
  display: inline-block;
`;

const LoginLogoutButton = styled(Link)`
  border: 1px solid black;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: black;
  outline: none;
  cursor: pointer;
  background-color: #e7f5ff;
  &:hover {
    color: blue;
  }
`;

const MovieMenu = (
  <Menu>
    <Menu.Item key='1'>
      <Link type='link' to='/movieChart'>
        무비차트
      </Link>
    </Menu.Item>
    <Menu.Item key='2'>
      <Link type='link' to='/hdTrailer'>
        HD 트레일러
      </Link>
    </Menu.Item>
    <Menu.Item key='3' style={{ borderBottom: '1px solid gray' }}>
      <Link type='link' to='/movieFinder'>
        무비파인더
      </Link>
    </Menu.Item>

    {/* <Divider style={{ margin: 0 }} /> */}
    <Menu.Item key='4'>
      <Link type='link' to='/arthouse'>
        CGV 아트하우스
      </Link>
    </Menu.Item>
  </Menu>
);

// const MovieMenu = () => {
//   return (
//     <>
//       <Menu.Item key="1" ><Link type="link" to="/MovieChart">무비차트</Link></Menu.Item>
//       <Menu.Item key="2"><Link type="link" to="/HDTrailer">HD 트레일러</Link></Menu.Item>
//       <Menu.Item key="3" style="border-bottom:1px solid gray;"><Link type="link" to="/MovieFinder">무비파인더</Link></Menu.Item>
//       <Menu.Item key="4"><Link type="link" to="/Arthouse">CGV 아트하우스</Link></Menu.Item>
//     </>
//   )
// }

const TicketMenu = (
  <Menu>
    <Menu.Item key='1'>
      <Link type='link' to='/fastTicketing'>
        빠른예매
      </Link>
    </Menu.Item>
    <Menu.Item key='2'>
      <Link type='link' to='/movieTime'>
        상영시간표
      </Link>
    </Menu.Item>
  </Menu>
);

const TheaterMenu = (
  <Menu>
    <Menu.Item key='1'>
      <Link type='link' to='/theater'>
        CGV 극장
      </Link>
    </Menu.Item>
    <Menu.Item key='2' style={{ borderBottom: '1px solid gray' }}>
      <Link type='link' to='/specialTheater'>
        특별관
      </Link>
    </Menu.Item>
    {/* <Divider style={{ margin: "0" }} /> */}
    <Menu.Item key='3'>
      <Link type='link' to='/clubService'>
        CLUB 서비스
      </Link>
    </Menu.Item>
  </Menu>
);

const EventCultureMenu = (
  <Menu>
    <Menu.Item key='1'>
      <Link type='link' to='/event'>
        이벤트
      </Link>
    </Menu.Item>
    <Menu.Item key='2'>
      <Link type='link' to='/giftshop'>
        기프트샵
      </Link>
    </Menu.Item>
    <Menu.Item key='3'>
      <Link type='link' to='/magazine'>
        매거진
      </Link>
    </Menu.Item>
  </Menu>
);

const MenuCreate = ({ MenuName, TopLink, TopTitle }) => {
  return (
    <Dropdown overlay={MenuName}>
      <Link className='ant-dropdown-link' type='link' to={TopLink}>
        {TopTitle}
      </Link>
    </Dropdown>
  );
};

const SubMenuCreate = ({ keys, title }) => {
  return (
    <SubMenu key={keys} title={title}>
      <MovieMenu />
    </SubMenu>
  );
};

const Header = ({ user, onLogout }) => {
  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <Link to='/' className='logo'>
            MOVIE
          </Link>
          <div className='center'>
            {/* <Menu mode="horizontal"> */}
            {/* <Menu.Item key="mail" >aaa</Menu.Item> */}
            {/* <SubMenuCreate keys="1" title="영화" /> */}
            {/* </Menu> */}
            {/* <SubMenu key="SubMenu" title="Navigation Three - Submenu">
                <Menu.Item key="1">이벤트</Menu.Item>
                <Menu.Item key="2">기프트샵</Menu.Item>
                <Menu.Item key="3">매거진</Menu.Item>
              </SubMenu>
            </Menu> */}
            <MenuCreate
              MenuName={MovieMenu}
              TopLink='/'
              TopTitle='영화'
              key='1'
            />
            <MenuCreate
              MenuName={TicketMenu}
              TopLink='/ticket'
              TopTitle='예매'
              key='2'
            />
            <MenuCreate
              MenuName={TheaterMenu}
              TopLink='/theater'
              TopTitle='극장'
              key='3'
            />
            <MenuCreate
              MenuName={EventCultureMenu}
              TopLink='/event'
              TopTitle='이벤트&컬처'
              key='4'
            />
          </div>
          {localStorage.getItem('user') ? (
            <div className='right'>
              <UserInfo>
                {localStorage.getItem('user').split('_')[0]} 님
              </UserInfo>
              <LoginLogoutButton onClick={onLogout}>로그아웃</LoginLogoutButton>
            </div>
          ) : (
            <div className='right'>
              <LoginLogoutButton to='/login'>로그인</LoginLogoutButton>
            </div>
          )}
          {/* {user ? (
            <div className='right'>
              <UserInfo>{user.username}</UserInfo>
              <LoginLogoutButton onClick={onLogout}>로그아웃</LoginLogoutButton>
            </div>
          ) : (
            <div className='right'>
              <LoginLogoutButton to='/login'>로그인</LoginLogoutButton>
            </div>
          )} */}
        </Wrapper>
      </HeaderBlock>
    </>
  );
};

export default Header;
