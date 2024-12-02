import WizardForm from '../../components/forms/WizardForm';
import WizardList from '../../components/WizardList/WizardList';

const WizardPage = () => {
  return (
    <div>
      <h2>Wizards</h2>
      <WizardForm />
      <WizardList />
    </div>
  );
};

export default WizardPage;