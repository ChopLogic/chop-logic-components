import { FC } from 'react';

interface ReadViewProps {
  value: string;
  placeholder: string;
  onClick: (event: React.MouseEvent) => void;
  className: string;
}

export const ReadView: FC<ReadViewProps> = ({ value, placeholder, onClick, className, ...rest }) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick(e as any);
    }
  };

  return (
    <span onClick={onClick} className={className} role='button' tabIndex={0} onKeyDown={handleKeyDown} {...rest}>
      {value || placeholder}
    </span>
  );
};
