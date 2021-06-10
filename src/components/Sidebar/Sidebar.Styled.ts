import styled from 'styled-components';

const Sidebar = styled.div`
    position: fixed;
    right: 0px;
    top: 0px;
    bottom: 0px;
    // border: solid 1px black;
    max-width: 420px;
    width: 100%;
    background-color: white;
    border-radius: 10px 0 0 10px;
    
    @media only screen and (max-width: 420px) {
        border-radius: 0;
      }
`;

const SiderbarParent = styled.div`
    inset: 0px;
    z-index: 1;
    position: fixed;
    background: rgba(0, 0, 0, 0.33);
`;

const SidebarTitle = styled.div`
      min-height: 50px;
      display: flex;
      justify-content: space-between;
      padding: 15px;
      border-bottom: 1px solid #8a8a8a;
`;

const CloseButton = styled.button`
      background-color: white;
      border:none;
      cursor: pointer;
      &:focus {
        outline: none;
      }
      i {
        font-size: 16px;
      }
`;

export default Sidebar;
export { SiderbarParent, SidebarTitle, CloseButton };
