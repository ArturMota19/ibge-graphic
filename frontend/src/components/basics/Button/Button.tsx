// Imports
import Spinner from "../SpinnerLoading/SpinnerLoading";
import s from "./Button.module.css";

//Styles
export default function Button({
    type = "button",
    text,
    backgroundColor,
    color,
    doFunction = undefined,
    disabled = false,
    isLink = false,
    url = "/",
    isLoading,
}: {
    type: "button" | "submit" | "reset" | undefined;
    text: string;
    backgroundColor?: string;
    color?: string;
    width?: string;
    height?: string;
    doFunction?: () => void;
    disabled?: boolean;
    isLink?: boolean;
    url?: string;
    isLoading?: boolean;
}) {
    function darkenColor(color: string, amount: number): string {
      let c = color.startsWith("#") ? color.slice(1) : color;
      if (c.length === 3) {
        c = c[0] + c[0] + c[1] + c[1] + c[2] + c[2];
      }
      const num = parseInt(c, 16);
      let r = (num >> 16) & 0xff;
      let g = (num >> 8) & 0xff;
      let b = num & 0xff;
      r = Math.max(0, Math.min(255, Math.floor(r * (1 - amount))));
      g = Math.max(0, Math.min(255, Math.floor(g * (1 - amount))));
      b = Math.max(0, Math.min(255, Math.floor(b * (1 - amount))));
      return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
    }

    if (isLink) {
        return (
            <a
              href={url}
              style={{
                background: backgroundColor
                  ? `linear-gradient(90deg, ${backgroundColor} 0%, ${darkenColor(backgroundColor, 0.2)} 100%)`
                  : undefined,
                color: color ? `var(--${color}-color)` : "#fff",
                transition: "background 0.3s, transform 0.2s",
                boxShadow: "6px 4px 5.6px 0px #00000040",
              }}
              type={type}
              className={s.basicButton}
              onClick={doFunction ? () => doFunction() : undefined}>
              <p>{text}</p>
            </a>
        );
    }

    return (
        <button
            style={{
                background: backgroundColor
                    ? `linear-gradient(90deg, ${backgroundColor} 0%, ${backgroundColor} 100%)`
                    : undefined,
                color: color ? `var(--${color}-color)` : "#fff",
                transition: "background 0.3s, transform 0.2s",
                boxShadow: "6px 4px 5.6px 0px #00000040",
            }}
            type={type}
            disabled={isLoading ? true : disabled}
            className={s.basicButton}
            onClick={doFunction ? () => doFunction() : undefined}>
            <p>{isLoading ? <Spinner size={35} color="#1F4547"/> : text}</p>
        </button>
    );
}
