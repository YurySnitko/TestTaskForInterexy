import { Typography } from "@mui/material";
import { Component, ErrorInfo, ReactNode } from "react";
import { Link } from "react-router-dom";
import * as S from "./ErrorBoundary.styles"

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return <S.Container>
        <S.Paper>
          <Typography variant="h3">Sorry.. there was an error</Typography>
          <Link to="/">To Home Page</Link>
        </S.Paper>
      </S.Container>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;