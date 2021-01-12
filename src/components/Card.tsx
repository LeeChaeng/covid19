import React from "react";
import styled from "styled-components";

import { numberWithComma } from "../utils/numberWithComma";

export type CardProps = {
  title: string;
  total?: number;
  today?: number;
  color: string;
};

export default function Card({ title, today, total, color }: CardProps) {
  return (
    <Block color={color}>
      <h3 className="title">{title}</h3>
      <div className="today">{today ? numberWithComma(today) : "-"}</div>
      <div className="total">{total ? numberWithComma(total) : "-"}</div>
    </Block>
  );
}

const Block = styled.li<{ color: string }>`
  border-radius: 10px;
  box-shadow: 9px 10px 30px -1px rgba(0, 0, 0, 0.13);
  padding: 8px;
  display: block;
  text-align: center;
  width: 86px; /* color: ${(props) => props.color}; */
  /* &:not(:first-child) {
    border-left-color: rgb(237, 240, 242);
    border-left-style: solid;
    border-left-width: 1px;
  } */
  & > .title {
    font-family: "SCDream_light";
    margin: 0;
    font-size: 12px;
    line-height: 1.8rem;
    letter-spacing: -0.8px;
  }

  & > .today {
    font-size: 22px;
    line-height: 2.2rem;
    font-weight: bold;
    letter-spacing: -0.4px;
  }

  & > .total {
    font-family: "SCDream_light";
    font-size: 8px;
  }
`;
