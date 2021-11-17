import { useState } from 'react';
import { Container } from './components/Container';
import { Section } from './components/Section';
import { FeedbackOptions } from './components/FeedbackOptions';
import { Notification } from './components/Notification';
import { Statistics } from './components/Statistics';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const totalFeedback = good + neutral + bad;

  const handleFeedback = setFeedback => {
    setFeedback(state => state + 1);
  };

  return (
    <Container>
      <Section title='Please leave your feedback'>
        <FeedbackOptions
          onGoodFeedback={() => handleFeedback(setGood)}
          onNeutralFeedback={() => handleFeedback(setNeutral)}
          onBadFeedback={() => handleFeedback(setBad)}
        />
      </Section>

      {totalFeedback ? (
        <Section title='Statistics'>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
          ></Statistics>
        </Section>
      ) : (
        <Notification message='No feedback given' />
      )}
    </Container>
  );
}

export default App;
