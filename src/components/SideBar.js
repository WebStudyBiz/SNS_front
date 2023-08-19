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

const SidebarMenuItem = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
  margin-bottom: 15px;
  padding: 0 20px;
  transition: color 0.3s;
  cursor: pointer;
  border-radius: 20px;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const SidebarMenuIcon = styled.div`
  margin-right: 20px;
  font-size: 2rem;
`;

const SidebarMenuLink = styled.a`
  color: #333;
  text-decoration: none;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarMenuItem>
        <SidebarMenuIcon>
          <FaHome />
        </SidebarMenuIcon>
        <SidebarMenuLink>홈</SidebarMenuLink>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuIcon>
          <FaPlusSquare />
        </SidebarMenuIcon>
        <SidebarMenuLink>업로드</SidebarMenuLink>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuIcon>
          <FaEnvelope />
        </SidebarMenuIcon>
        <SidebarMenuLink>메세지</SidebarMenuLink>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuIcon>
          <FaArchive />
        </SidebarMenuIcon>
        <SidebarMenuLink>보관함</SidebarMenuLink>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuIcon>
          <FaUser />
        </SidebarMenuIcon>
        <SidebarMenuLink>팔로워</SidebarMenuLink>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuIcon>
          <FaCog />
        </SidebarMenuIcon>
        <SidebarMenuLink>설정</SidebarMenuLink>
      </SidebarMenuItem>
    </SidebarContainer>
  );
};

export default Sidebar;
