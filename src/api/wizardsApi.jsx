const API_URL = 'http://localhost:3000/wizards';

export const fetchWizards = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch wizards');
  }
  return await response.json();
};

export const createWizard = async (wizard) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(wizard),
  });
  if (!response.ok) {
    throw new Error('Failed to create wizard');
  }
  return await response.json();
};

export const updateWizard = async (id, updatedWizard) => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedWizard),
    });
    if (!response.ok) {
      throw new Error('Failed to update wizard');
    }
    return await response.json();
  };

export const deleteWizard = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete wizard');
  }
  return await response.json();
};
