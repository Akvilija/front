import SpellForm from '../../components/forms/SpellForm';
import SpellList from '../../components/SpellList/SpellList';

const SpellPage = () => {
  return (
    <div>
      <h2>Spells</h2>
      <SpellForm />
      <SpellList />
    </div>
  );
};

export default SpellPage;