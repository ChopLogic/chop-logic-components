import { ErrorMessage } from '@components/atoms';
import {
  Component,
  type ComponentType,
  type ErrorInfo,
  type FC,
  type ReactNode,
  useId,
} from 'react';

type ErrorBoundaryInnerProps = {
  errorId: string;
  errorMessage?: string;
  onError?: () => void;
  children: ReactNode;
};

type ErrorBoundaryInnerState = {
  hasError: boolean;
};

class ComponentErrorBoundary extends Component<ErrorBoundaryInnerProps, ErrorBoundaryInnerState> {
  constructor(props: ErrorBoundaryInnerProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): Partial<ErrorBoundaryInnerState> {
    return { hasError: true };
  }

  override componentDidCatch(_error: Error, _errorInfo: ErrorInfo): void {
    this.props.onError?.();
  }

  override render(): ReactNode {
    if (this.state.hasError) {
      return (
        <ErrorMessage
          errorId={this.props.errorId}
          message={this.props.errorMessage}
          visible={true}
        />
      );
    }

    return this.props.children;
  }
}

export type WithErrorBoundaryProps = {
  errorMessage?: string;
  onError?: () => void;
};

export function withErrorBoundary<P extends object>(
  ComponentToWrap: ComponentType<P>,
): FC<P & WithErrorBoundaryProps> {
  const Wrapped: FC<P & WithErrorBoundaryProps> = ({
    errorMessage,
    onError,
    ...props
  }: P & WithErrorBoundaryProps) => {
    const boundaryId = useId().replace(/:/g, '');
    const errorId = `cl-error-boundary-${boundaryId}`;

    return (
      <ComponentErrorBoundary errorId={errorId} errorMessage={errorMessage} onError={onError}>
        <ComponentToWrap {...(props as P)} />
      </ComponentErrorBoundary>
    );
  };

  return Wrapped;
}
