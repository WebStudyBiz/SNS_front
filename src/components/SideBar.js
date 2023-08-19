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
  background-color: #333;
  color: white;
  padding: 20px;
`;

const SidebarMenuItem = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
  margin-bottom: 15px;
  transition: color 0.3s;
  cursor: pointer;

  &:hover {
    color: lightgray;
  }
`;

const SidebarMenuIcon = styled.div`
  margin-left: 4px;
  margin-right: 20px;
  font-size: 2rem;
`;

const SidebarMenuLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
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
