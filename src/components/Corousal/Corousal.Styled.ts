import styled from 'styled-components';

interface CorousalProp {
    imageData: string;
}

const CorousalStyle = styled.div`
    width: 90%;
    height: 100%;
    background-image: url(${(props:CorousalProp) => (props.imageData ? props.imageData : 'https://picsum.photos/300')});
    background-position: center;
    background-size: 100%;
    background-repeat: no-repeat;
`;
const ArrowWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;
const Arrow = styled.div`
  background: black;
  opacity: 0.6;
  width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  i {
    color: white;
    font-size: 40px;
    font-weight: 700;
  }
`;

export default CorousalStyle;
export { Arrow, ArrowWrapper };
