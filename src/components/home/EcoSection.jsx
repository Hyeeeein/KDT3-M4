import React, { useEffect, useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import styled from 'styled-components';

export default function EcoSection() {
  const [menuId, setMenuId] = useState(0);

  useEffect(() => {
    console.log(menuId);
  }, [menuId]);
  const handleHead = (id) => {
    if (menuId !== id) setMenuId(id);
    else setMenuId(-1);
  };
  return (
    <EcoSectionComponent>
      <EcoImage menuId={menuId} />
      <EcoMenu>
        <MenuItem menuId={menuId} headerId={0}>
          <h3 onClick={() => handleHead(0)}>
            <span>
              <em>we are </em> sustainable
            </span>
            {menuId === 0 ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </h3>
          <p>we care about environment and maintain our business without depleting natural resources</p>
        </MenuItem>
        <MenuItem menuId={menuId} headerId={1}>
          <h3 onClick={() => handleHead(1)}>
            <span>vegan</span>
            {menuId === 1 ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </h3>
          <p>
            We offer a wide selection of plant-based products to promote animal welfare and reduce the environmental
            impact of animal agriculture
          </p>
        </MenuItem>
        <MenuItem menuId={menuId} headerId={2}>
          <h3 onClick={() => handleHead(2)}>
            <span>plastic-free</span>
            {menuId === 2 ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </h3>
          <p>
            We minimize our use of plastic and offer plastic-free alternatives to reduce plastic waste and protect the
            environment.
          </p>
        </MenuItem>
      </EcoMenu>
    </EcoSectionComponent>
  );
}

const EcoSectionComponent = styled.section`
  display: flex;
  width: auto;
  height: auto;
  padding: 100px 0;
  gap: 20px;
  border: 1px solid black;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;
const EcoImage = styled.div`
  height: 420px;
  display: block;
  width: 300px;
  background-color: ${(props) => {
    switch (props.menuId) {
      case 0:
        return 'gray';
      case 1:
        return 'orange';
      case 2:
        return 'blue';
      default:
        return 'gray';
    }
  }};
  border: 1px solid orange;
`;
const EcoMenu = styled.div`
  height: 420px;
  display: flex;
  width: 300px;
  flex-direction: column;
`;

const MenuItem = styled.div`
  border-top: 1.5px solid var(--color-black2);

  overflow: hidden;
  display: flex;
  flex-direction: column;
  h3 {
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
    span {
      font-family: 'Fahkwang';
      font-size: 20px;
      font-weight: 300;
      em {
        color: var(--color-brown);
      }
    }
  }

  p {
    display: block;
    height: ${(props) => (props.headerId === props.menuId ? 'auto' : '0')};
    overflow: hidden;
    margin-bottom: 10px;
  }
`;
