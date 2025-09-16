// Imports
import { useEffect, useState } from "react";
import {SyncLoader} from "react-spinners"
import s from './Button.module.css'

//Styles
export default function Button({
  type = "button",
  text,
  backgroundColor, 
  borderColor, 
  color,
  width,
  doFunction = undefined,
  disabled = false,
  isLink = false,
  url = "/",
  isLoading,
}: {
  type: "button" | "submit" | "reset" | undefined;
  text: string;
  backgroundColor?: string;
  borderColor?: string; 
  color?: string;
  width?: string; 
  height?: string;
  doFunction?: () => void;
  disabled?: boolean;
  isLink?: boolean;
  url?: string;
  isLoading?: boolean;
}) {

  if (isLink) {
    return (
      <a
        href={url}
        style={{
          color: `var(--${color}-color)`,
          transition: "background-color 1s",
        }}
        type={type}
        // className={}
        onClick={doFunction ? () => doFunction() : undefined}>
        <p>{text}</p>
      </a>
    );
  }

  return (
    <button
      style={{
        color: ``,
        transition: "background-color 1s",
        width: `${width ? width : "100%"}`,
        boxShadow: "6px 4px 5.6px 0px #00000040",
        border: `2px solid var(--${borderColor ? borderColor : backgroundColor}-color)`,
      }}
      type={type}
      disabled={isLoading ? true : disabled}
      className={s.basicButton}
      onClick={doFunction ? () => doFunction() : undefined}>
      <p>
        {isLoading ? <SyncLoader color="#FFF" speedMultiplier={0.5} /> : text}
      </p>
    </button>
  );
}
