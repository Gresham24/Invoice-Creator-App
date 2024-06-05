import React from "react";
import styled from "styled-components";

const NavbarBase = styled.div`
  background-color: #333;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
`;

export default class Navbar extends React.Component {
  render() {
    return (
      <NavbarBase>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo odio porro
        tenetur architecto reiciendis beatae minus, veniam delectus maxime, quod
        obcaecati perspiciatis sapiente dignissimos expedita repudiandae, nobis
        deleniti? Necessitatibus, saepe.
      </NavbarBase>
    );
  }
}
