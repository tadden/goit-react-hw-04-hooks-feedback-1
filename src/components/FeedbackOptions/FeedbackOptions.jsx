import { Button } from '../Button';
import s from './FeedbackOptions.module.css';

function FeedbackOptions({ onGoodFeedback, onNeutralFeedback, onBadFeedback }) {
  return (
    <div className={s.controls}>
      <Button option='good' onClick={onGoodFeedback} />
      <Button option='neutral' onClick={onNeutralFeedback} />
      <Button option='bad' onClick={onBadFeedback} />
    </div>
  );
}

export { FeedbackOptions };
