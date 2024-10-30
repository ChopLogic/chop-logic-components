import { ChopLogicButtonView } from './types';

export declare const StyledButton: import('styled-components/dist/types').IStyledComponentBase<
  'web',
  import('styled-components/dist/types').Substitute<
    import('../../../../node_modules/react').DetailedHTMLProps<
      import('../../../../node_modules/react').ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    {
      $view: ChopLogicButtonView;
      $disabled: boolean;
      $extended: boolean;
    }
  >
> &
  string;
export declare const StyledButtonText: import('styled-components/dist/types').IStyledComponentBase<
  'web',
  import('styled-components').FastOmit<
    import('../../../../node_modules/react').DetailedHTMLProps<
      import('../../../../node_modules/react').HTMLAttributes<HTMLSpanElement>,
      HTMLSpanElement
    >,
    never
  >
> &
  string;
