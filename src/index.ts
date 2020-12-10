import NumberGenerators from './generators/number';
import ChoiceGenerators from './generators/choice';
import DateGenerators from './generators/date';

export default {
  ...NumberGenerators,
  ...ChoiceGenerators,
  ...DateGenerators,
};
