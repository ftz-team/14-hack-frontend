import React from "react";
import { Logo } from "../../components/Logo/Logo";
import {
  Content,
  MainContainer,
  Navigation,
  NavigationItem,
} from "./AdminLayout.styled";
import home from "../../../src/assets/img/home.png";
import { Programs } from "../../components/Programs/Porgrams";
import { UsersList } from "../../components/UsersList/UsersList";

export const AdminLayout: React.FC = ({ children }) => {
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <>
      <MainContainer>
        <Navigation>
          <Logo />
          <NavigationItem
            active={activeTab == 0}
            onClick={() => setActiveTab(0)}
          >
            <img src={home.src} />
            <p>Программы</p>
          </NavigationItem>
          <NavigationItem
            active={activeTab == 1}
            onClick={() => {
              setActiveTab(1);
            }}
          >
            <img src={home.src} />
            <p>Ученики</p>
          </NavigationItem>
        </Navigation>
        <Content>
          {children ? (
            children
          ) : activeTab == 0 ? (
            <Programs />
          ) : activeTab == 1 ? (
            <UsersList />
          ) : null}
        </Content>
      </MainContainer>
    </>
  );
};
