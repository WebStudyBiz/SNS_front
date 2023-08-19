import React from "react";
import styled from "styled-components";
import {
  FaHome,
  FaUser,
  FaCog,
  FaEnvelope,
  FaPlusSquare,
  FaArchive,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const SidebarContainer = styled.div`
  position: fixed;
  top: 60px;
  height: 100%;
  width: 200px;
  background-color: white;
  color: #333;
  padding: 20px;
  transition: 0.2s;
  @media (max-width: 768px) {
    width: 40px;
  }
`;

const SidebarMenuIcon = styled.div`
  color: #333;
  margin-right: 20px;
  font-size: 2rem;
`;

const SidebarMenuText = styled.a`
  color: #333;
  text-decoration: none;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const SidebarMenuItem = styled(Link)`
  display: flex;
  align-items: center;
  height: 70px;
  margin-bottom: 15px;
  padding: 0 20px;
  transition: color 0.3s;
  cursor: pointer;
  border-radius: 20px;
  text-decoration: none;

  &:hover {
    background-color: #f5f5f5;

    ${SidebarMenuIcon} {
      font-size: 2.1rem;
    }
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarMenuItem to="/">
        <SidebarMenuIcon>
          <FaHome />
        </SidebarMenuIcon>
        <SidebarMenuText>홈</SidebarMenuText>
      </SidebarMenuItem>
      <SidebarMenuItem to="/upload">
        <SidebarMenuIcon>
          <FaPlusSquare />
        </SidebarMenuIcon>
        <SidebarMenuText>업로드</SidebarMenuText>
      </SidebarMenuItem>
      <SidebarMenuItem to="/message">
        <SidebarMenuIcon>
          <FaEnvelope />
        </SidebarMenuIcon>
        <SidebarMenuText>메세지</SidebarMenuText>
      </SidebarMenuItem>
      <SidebarMenuItem to="/store">
        <SidebarMenuIcon>
          <FaArchive />
        </SidebarMenuIcon>
        <SidebarMenuText>보관함</SidebarMenuText>
      </SidebarMenuItem>
      <SidebarMenuItem to="/follower">
        <SidebarMenuIcon>
          <FaUser />
        </SidebarMenuIcon>
        <SidebarMenuText>팔로워</SidebarMenuText>
      </SidebarMenuItem>
      <SidebarMenuItem to="/settings">
        <SidebarMenuIcon>
          <FaCog />
        </SidebarMenuIcon>
        <SidebarMenuText>설정</SidebarMenuText>
      </SidebarMenuItem>
    </SidebarContainer>
  );
};

export default Sidebar;
