import "./MyLabel.css";

interface Props {
  /**
   * Label of the component
   */
  label: string;

  /**
   * Size of the component
   */
  size?: "normal" | "h1" | "h2" | "h3";

  /**
   *  If true, the component will be all caps
   */
  allCaps?: boolean;

  /**
   * Color of the component
   */

  color?: "text-primary" | "text-secondary" | "text-tertiary";

  /**
   * Color of the font
   */

  fontColor?: string;
}

const MyLabel = ({
  label,
  size = "normal",
  allCaps = false,
  color,
  fontColor,
}: Props): JSX.Element => {
  return (
    <span
      className={`${size} ${color}`}
      style={{
        textTransform: allCaps ? "uppercase" : "none",
        color: fontColor,
      }}
    >
      {label}
    </span>
  );
};
export default MyLabel;
