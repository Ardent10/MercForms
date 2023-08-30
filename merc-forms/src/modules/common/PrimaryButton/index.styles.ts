interface props {
  width?: number | string;
  height?: number;
  fontSize?: number;
  fontWeight?: number;
  backgroundColor?: string;
  color?: string;
  padding?: string | number;
  borderRadius?: string;
  borderNoBgColor?: boolean;
  borderColor?: string;
  hoverColor?: string;
  textTransform?: string;
}

export const Styles = (props: props) => {
  return {
    buttonStyle: {
      background:
        props.backgroundColor || "linear-gradient(to right, #8172fd, #c0afff)",
      border: props.borderColor,
      color: (props.color && props.color) || "#fff",
      width: props.width && props.width,
      height: (props.height && props.height) || "37px",
      borderRadius: (props.borderRadius && props.borderRadius) || "7px",
      fontFamily: "Poppins,sans-serif;",
      fontWeight: props.fontWeight ? props.fontWeight : 600,
      fontSize: (props.fontSize && props.fontSize) || "14px",
      display: "inline-flex",
      padding: props.padding && props.padding,
      // textTransform: props.textTransform ? props.textTransform : "none",
      transition: "all 0.25s ease",
      "&:hover": {
        border: `1px solid ${props.borderColor}`,
        background: props.hoverColor || "#FFF",
        cursor: "pointer",
        textDecoration: "none",
        transform: "translateY(-0.05em)",
        color: "#000",
      },
    },
  };
};
