import React from 'react';
import Button from '../Button/Button';
import './ActionCard.scss';

export interface ActionCardProps {
  title: string;
  description: string;
  buttonText: string;
  buttonVariant?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'neutral';
  buttonSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  onButtonClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const ActionCard: React.FC<ActionCardProps> = ({
  title,
  description,
  buttonText,
  buttonVariant = 'secondary',
  buttonSize = 'sm',
  onButtonClick,
  className = '',
  disabled = false,
}) => {
  return (
    <div className={`lyse-action-card ${className}`}>
      <div className="lyse-action-card__content">
        <div className="lyse-action-card__text">
          <h3 className="lyse-action-card__title">{title}</h3>
          <p className="lyse-action-card__description">{description}</p>
        </div>
        <div className="lyse-action-card__action">
          <Button
            variant={buttonVariant}
            size={buttonSize}
            onClick={onButtonClick}
            disabled={disabled}
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ActionCard;
