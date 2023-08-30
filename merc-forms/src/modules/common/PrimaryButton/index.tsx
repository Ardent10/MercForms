import { Button, CircularProgress } from "@chakra-ui/react";
import { ReactNode, useEffect, useState } from "react";
import { Styles } from "./index.styles";

interface props {
  title: string;
  width?: number | string;
  height?: number;
  padding?: string | number;
  fontSize?: number;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
  onClick?: any;
  backgroundColor?: string;
  color?: string;
  buttonChild?: HTMLElement | ReactNode;
  disableElevation?: boolean;
  borderRadius?: string;
  borderNoBgColor?: boolean;
  borderColor?: string;
  link?: string;
  textTransform?: string;
  hoverColor?: string;
  fontWeight?: number;
  showLoaderonBtn?: boolean;
}

export function PrimaryButton(props: props) {
  const [isLoading, setIsLoading] = useState(false);
  const sxStylesprops = {
    width: props.width,
    height: props.height,
    padding: props.padding,
    fontSize: props.fontSize,
    backgroundColor: props.backgroundColor,
    color: props.color,
    borderRadius: props.borderRadius,
    borderNoBgColor: props.borderNoBgColor,
    borderColor: props.borderColor,
    textTransform: props.textTransform,
    hoverColor: props.hoverColor,
    fontWeight: props.fontWeight,
  };
  const styles = Styles(sxStylesprops);

  // useEffect(() => {
  //   setIsLoading(state?.isLoading ? state?.isLoading : false);
  // }, [state?.isLoading]);

  return (
    <Button
      // href={props.link ? props.link : ""}
      onClick={props.onClick}
      type={props.type}
      variant="contained"
      disabled={props.disabled || isLoading}
      sx={styles.buttonStyle}
    >
      <>
        {props?.showLoaderonBtn && isLoading ? (
          <CircularProgress size={20} color="#FFF" isIndeterminate />
        ) : (
          <>
            {props.buttonChild && props.buttonChild}
            {props.title}
          </>
        )}
      </>
    </Button>
  );
}
