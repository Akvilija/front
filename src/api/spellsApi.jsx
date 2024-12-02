const API_URL = 'http://localhost:3000/spells';

export const fetchSpells = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch spells');
  }
  return await response.json();
};

export const createSpell = async (spell) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(spell),
  });
  if (!response.ok) {
    throw new Error('Failed to create spell');
  }
  return await response.json();
};

export const deleteSpell = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete spell');
  }
  return await response.json();
};

export const updateSpell = async (id, updatedSpell) => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedSpell),
    });
    if (!response.ok) {
      throw new Error('Failed to update spell');
    }
    return await response.json();
  };
