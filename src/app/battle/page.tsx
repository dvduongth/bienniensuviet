import { BattleClient } from './BattleClient';
import questionsData from '@/../content/questions.json';
import { Question } from '@/lib/types';

export default function BattlePage() {
  return <BattleClient allQuestions={questionsData.questions as Question[]} />;
}
