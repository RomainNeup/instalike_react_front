export function loadState() {
  try {
    const serializedState = localStorage.getItem('instalike_state');

    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
}

let lastUpdated: number = 0;

export function saveState(state: any) {
  if (new Date().getTime() - lastUpdated > 1000) {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('instalike_state', serializedState);
      lastUpdated = new Date().getTime();
    } catch {
      console.error('Error while saving state');
    }
  }
}
