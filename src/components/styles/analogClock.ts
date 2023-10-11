import styled from 'styled-components'
export default {
  Clock: styled.div`
    width: 300px;
    height: 300px;
    border-radius: 50%;
    position: absolute;
    top: 5%;
    right: 5%;
    box-shadow: 0 2px 30px rgba(0, 0, 0, 0.2);
    font-size: 24px;
    color: #444;
    text-align: center;
    &::after {
      background: #aaa;
      content: "";
      width: 12px;
      height: 12px;
      border-radius: 50%;
      position: absolute;
      z-index: 2;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border: 2px solid #fff;
    }
  `,
  Hand: styled.div<{type: string}>`
    position: absolute;
    width: 6px;
    height: 60px;
    background: #333;
    top: ${props => props.type === 'hour' ? "49%" : "30%"};
    left: 49%;
    transform-origin: bottom;
  `,
  HourHand: styled.div`
    position: absolute;
    width: 6px;
    height: 60px;
    background: #333;
    top: 30%;
    left: 49%;
    transform-origin: bottom;
  `,
  MinHand: styled.div`
    position: absolute;
    width: 4px;
    height: 80px;
    background: blue;
    top: 22.5%;
    left: 49%;
    transform-origin: bottom;
  `,
  SecondHand: styled.div`
    position: absolute;
    width: 2px;
    height: 118px;
    background: red;
    top: 10.5%;
    left: 50%;
    transform-origin: bottom;
  `,
  TimeNumber: styled.span`
    position: absolute;
    font-family: "Source Sans Pro", sans-serif;
    font-weight: 700;
  `,
}
