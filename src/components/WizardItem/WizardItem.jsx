import { useAppContext } from '../../contexts/AppContext';
import { deleteWizard, updateWizard } from '../../api/wizardsApi';

const WizardItem = ({ wizard }) => {
  const { state, dispatch } = useAppContext();
  const isEditing = state.editingItem && state.editingItem._id === wizard._id;

  const handleRemove = async () => {
    try {
      await deleteWizard(wizard._id);
      dispatch({ type: 'REMOVE_WIZARD', payload: wizard._id });
    } catch (error) {
      console.error('Failed to remove wizard:', error);
    }
  };

  const handleEdit = () => {
    dispatch({ type: 'START_EDIT', payload: wizard });
  };

  const handleSave = async () => {
    try {
      const { _id, ...updatedWizard } = state.editingFields;

      await updateWizard(wizard._id, updatedWizard);

      dispatch({ type: 'UPDATE_WIZARD', payload: { ...updatedWizard, _id: wizard._id } });
      dispatch({ type: 'STOP_EDIT' });
    } catch (error) {
      console.error('Failed to update wizard:', error);
    }
  };

  const handleFieldChange = (field, value) => {
    dispatch({ type: 'UPDATE_EDIT_FIELDS', payload: { [field]: value } });
  };

  const handleCancel = () => {
    dispatch({ type: 'STOP_EDIT' });
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={state.editingFields.name || ''}
            onChange={(e) => handleFieldChange('name', e.target.value)}
          />
          <input
            type="text"
            value={state.editingFields.house || ''}
            onChange={(e) => handleFieldChange('house', e.target.value)}
          />
          <input
            type="text"
            value={state.editingFields.wand || ''}
            onChange={(e) => handleFieldChange('wand', e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      ) : (
        <div>
          <h3>{wizard.name}</h3>
          <p>House: {wizard.house}</p>
          <p>Wand: {wizard.wand}</p>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleRemove}>Remove</button>
        </div>
      )}
    </div>
  );
};

export default WizardItem;